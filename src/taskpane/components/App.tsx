import * as React from "react";
import {
  PrimaryButton,
  Label,
  Checkbox,
  FontIcon,
  mergeStyleSets,
  mergeStyles,
  Separator,
  IChoiceGroupOption,
  ChoiceGroup,
  Fabric,
  TextField,
  Stack,
  IStackTokens
} from "office-ui-fabric-react";
import Progress from "./Progress";
import { useState, useEffect, useRef } from "react";

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface IAppSettings {
  AutoDetect: boolean;
  ShowLog: boolean;
  Headers: string;
  Contents: string;
  Emails: string;
  ApiUrls: string;
}

const iconClass = mergeStyles({
  fontSize: 50,
  height: 50,
  width: 50,
  margin: "0 25px"
});

const classNames = mergeStyleSets({
  red: [{ color: "red" }, iconClass],
  green: [{ color: "green" }, iconClass]
});

const options: IChoiceGroupOption[] = [
  { key: "sender", text: "suspicious sender" },
  { key: "content", text: "suspicious content" },
  { key: "spam", text: "spam/marketing" },
  { key: "other", text: "other reason" }
];

const itemAlignmentsStackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10
};

export const App: React.FC<AppProps> = (prop: AppProps) => {
  const [appSettings, setAppSettings] = useState<IAppSettings>(null);
  const [isJunkReport, setJunkReport] = useState(false);
  const [reason, setReason] = useState("content");
  const [mailState, setMailState] = useState({ isSafe: true, isGophish: false, isReported: false });
  const [mailData, setMailData] = useState({ from: "", subject: "", body: "", bodyHtml: "" });
  const [mailFile, setMailFile] = useState("");
  const { title, isOfficeInitialized } = prop;
  const [otherReason, setOtherReason] = useState("");
  const logInput = useRef(null);

  //Load settings and set mail change event
  useEffect(() => {
    writeLog("init data");
    fetchSettings();

    Office.context.mailbox.addHandlerAsync(Office.EventType.ItemChanged, _args => {
      writeLog("load new email data");
      setMailState({ isSafe: true, isGophish: false, isReported: false });
      loadEmailData();
    });
  }, []);

  //load mail title and body then settings loaded
  useEffect(() => {
    writeLog("load email data");
    loadEmailData();
  }, [appSettings]);

  //check email data for phishing content
  useEffect(() => {
    writeLog("check email content");
    checkContent();
  }, [mailData]);

  //if phishing content then send api call
  useEffect(() => {
    if (mailState.isSafe === false && appSettings.AutoDetect) {
      sendReportToApiList();
    }
  }, [mailState]);

  const fetchSettings = async () => {
    const url = "./settings.json";
    try {
      const response = await fetch(url);

      if (response.status === 200) {
        const data = await response.json();
        writeLog(data);
        setAppSettings(data);
      } else {
        writeLog(response.statusText);
      }
    } catch (error) {
      writeLog("catch fetchSettings");
      if (error) writeLog(error);
    }
  };

  //load email subject and body
  const loadEmailData = () => {
    console.log("loadEmailData:");

    Office.context.mailbox.item.body.getAsync(Office.CoercionType.Text, result => {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
        const tmpSubject = Office.context.mailbox.item.subject;
        const tmpFrom = Office.context.mailbox.item.from.emailAddress;
        const tmpBody = result.value;

        Office.context.mailbox.item.body.getAsync(Office.CoercionType.Html, result => {
          if (result.status === Office.AsyncResultStatus.Succeeded) {
            // @ts-ignore
            tmp = result.value;
            // console.log("bodyHtml:");
            // @ts-ignore
            // console.log(tmp);

            setMailData({ from: tmpFrom, subject: tmpSubject, body: tmpBody, bodyHtml: result.value });
          } else {
            writeLog("Load body html Error: " + result.error);
          }
        });
      } else {
        writeLog("Load body Error: " + result.error);
      }
    });

    getEWSEmailAsFile();
    // getEmailAsFile();
  };

  const checkContent = () => {
    let isSubject = false;
    let isBody = false;

    if (appSettings?.AutoDetect) {
      //check subject
      for (let i = 0; i < appSettings?.Headers?.length; i++) {
        let regexp = new RegExp(appSettings.Headers[i], "i");

        if (regexp.test(mailData.subject)) isSubject = true;
      }

      //check body
      for (let i = 0; i < appSettings?.Contents?.length; i++) {
        let regexp = new RegExp(appSettings.Contents[i], "i");

        if (regexp.test(mailData.body)) isBody = true;
      }
    }

    //check for Gophish email
    let regexp = new RegExp("http:.*rid([^'\"]+)", "i");
    var match = regexp.exec(mailData.bodyHtml);
    let isGophish = match?.length > 0;

    if (isSubject || isBody) {
      writeLog("Phishing mail detected. Gophish: " + isGophish);
      setMailState({ isSafe: false, isGophish: isGophish, isReported: false });
    } else {
      writeLog("Looks safe. Gophish: " + isGophish);
      setMailState({ isSafe: true, isGophish: isGophish, isReported: false });
    }
  };

  const onChangeIsJunkReport = React.useCallback((_ev: React.FormEvent<HTMLElement>, checked: boolean): void => {
    writeLog("setJunkReport: " + !!checked);
    setJunkReport(!!checked);
  }, []);

  //Report reason change
  const onChangeOption = (_ev: React.FormEvent<HTMLInputElement>, _option: IChoiceGroupOption) => {
    writeLog(_option.key);
    setReason(_option.key);
  };

  const sendReportToApiList = async () => {
    writeLog("sendReportToGophishApi");

    //get rid param and send api call
    let url = "";
    let rid = "";

    let regexp = new RegExp("http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+", "igm");
    var match = mailData.bodyHtml.match(regexp);
    writeLog("match: " + match.length);

    // http://phish_server/?rid=1234567
    // http://phish_server/report?rid=1234567
    if (match.length > 0) {
      for (let i = 0; i < match.length; i++) {
        writeLog("match url: " + match[i]);
        if (match[i].indexOf("?rid=") != -1) url = match[i];
      }

      if (url !== "") {
        let tmp = url.split("?rid=");

        if (tmp.length > 1) {
          url = tmp[0];
          rid = tmp[1];
        }

        if (tmp.length === 1) url = url.split("?")[0];
        if (url.endsWith("/")) url = url.substring(0, url.length - 1);

        writeLog("url: " + url);
        writeLog("rid: " + rid);
      }
    }

    //send api calls
    for (let i = 0; i < appSettings?.ApiUrls?.length; i++) {
      let apiUrl = appSettings?.ApiUrls[i];

      if (apiUrl.indexOf("{url}") >= 0) apiUrl = apiUrl.replace("{url}", url);
      if (apiUrl.indexOf("{rid}") >= 0) apiUrl = apiUrl.replace("{rid}", rid);

      writeLog("try send to: " + apiUrl);

      try {
        const response = await fetch(apiUrl, { method: "GET", mode: "no-cors"});
        //Use if CORS error 
        //const proxyurl = "https://your-corsanywhere.server.com/";
        //const response = await fetch(proxyurl + apiUrl, { method: "GET"});

        if (response.status === 204) {
          const data = await response.text();
          writeLog("OK: " + data);
        } else {
          writeLog("Status: " + response.status + ": " + response.statusText);
        }
      } catch (error) {
        writeLog("catch sendReportToGophishApi");
        if (error) writeLog(error);

        writeLog("try send (no-cors) to: " + apiUrl);
        try {
          const response = await fetch(apiUrl, { method: "GET", mode: "no-cors"});
          //Use if CORS error 
          //const proxyurl = "https://your-corsanywhere.server.com/";
          //const response = await fetch(proxyurl + apiUrl, { method: "GET"});

          if (response.status === 204) {
            const data = await response.text();
            writeLog("OK: " + data);
          } else {
            writeLog("Status: " + response.status + ": " + response.statusText);
          }
        } catch (error) {
          writeLog("catch sendReportToGophishApi");
          if (error) writeLog(error);
        }
      }
    }
  };

  const getItemRestId = (): string => {
    if (Office.context.mailbox.diagnostics.hostName === "OutlookIOS") {
      // itemId is already REST-formatted.
      return Office.context.mailbox.item.itemId;
    } else {
      // Convert to an item ID for API v2.0.
      return Office.context.mailbox.convertToRestId(
        Office.context.mailbox.item.itemId,
        Office.MailboxEnums.RestVersion.v2_0
      );
    }
  };

  const getEWSEmailAsFile = async () => {
    writeLog("get EWS Email as file: ");

    var ewsId = Office.context.mailbox.item.itemId;
    var request =
      '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages" xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
      '  <soap:Header><t:RequestServerVersion Version="Exchange2013" /></soap:Header>' +
      "  <soap:Body>" +
      "    <m:GetItem>" +
      "      <m:ItemShape>" +
      // "        <t:BaseShape>Default</t:BaseShape>" +
      "        <t:BaseShape>IdOnly</t:BaseShape>' +" +
      "        <t:IncludeMimeContent>true</t:IncludeMimeContent>" +
      // "        <t:BodyType>Text</t:BodyType>" +
      "      </m:ItemShape >" +
      "      <m:ItemIds>" +
      '        <t:ItemId Id="' +
      ewsId +
      '" />' +
      "      </m:ItemIds>" +
      "    </m:GetItem>" +
      "  </soap:Body>" +
      "</soap:Envelope>";

    Office.context.mailbox.makeEwsRequestAsync(request, function(result) {
      writeLog("EWS result:" + result.status);

      var parser = new DOMParser();
      var doc = parser.parseFromString(result.value, "text/xml");
      var values = doc.getElementsByTagName("t:MimeContent");

      writeLog(atob(values[0].textContent));
      setMailFile(values[0].textContent);
    });
  };

  const sendEmails = async () => {
    writeLog("send Emails: ");

    Office.context.mailbox.getCallbackTokenAsync({ isRest: true }, async function(result) {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
        var accessToken = result.value;
        writeLog("accessToken: OK");

        const api = Office.context.mailbox.restUrl + "/v2.0/me/sendmail";
        let comment = "Reason: ";

        if (reason === "sender") comment += "suspicious sender";
        if (reason === "content") comment += "suspicious content";
        if (reason === "spam") comment += "spam/marketing";
        if (reason === "other") comment += otherReason;

        for (let i = 0; i < appSettings?.Emails.length; i++) {
          try {
            const param = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken
              },
              body: JSON.stringify({
                Message: {
                  Subject: "Email to analyze",
                  Body: {
                    ContentType: "Text",
                    Content: comment
                  },
                  ToRecipients: [
                    {
                      EmailAddress: {
                        Address: appSettings.Emails[i]
                      }
                    }
                  ],
                  Attachments: [
                    {
                      "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
                      Name: "email.eml",
                      ContentBytes: mailFile
                    }
                  ]
                },
                SaveToSentItems: "false"
              })
            };

            // writeLog(param);

            const response = await fetch(api, param);
            writeLog("status" + response.status);

            if (response.status === 200 || response.status === 202) {
              const data = await response.text();
              writeLog(data);
            } else {
              writeLog("Error: " + response.statusText);
            }
          } catch (error) {
            writeLog("catch sendEmails");
            if (error) writeLog(error);
          }
        }
      } else {
        writeLog("not access token");
      }
    });
  };

  const moveToJunk = async () => {
    writeLog("move To Junk: ");

    Office.context.mailbox.getCallbackTokenAsync({ isRest: true }, async function(result) {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
        var accessToken = result.value;
        writeLog("accessToken: OK");

        const itemId = getItemRestId();
        const api = Office.context.mailbox.restUrl + "/v2.0/me/messages/" + itemId + "/move";
        const param = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken
          },
          body: JSON.stringify({
            DestinationId: "JunkEmail"
          })
        };

        writeLog(param);

        try {
          const response = await fetch(api, param);
          writeLog("status" + response.status);

          if (response.status === 200 || response.status === 201) {
            const data = await response.text();
            writeLog(data);
          } else {
            writeLog("Error: " + response.statusText);
          }
        } catch (error) {
          writeLog("catch movrEmails");
          if (error) writeLog(error);
        }
      } else {
        writeLog("not access token");
      }
    });
  };

  const sendReport = async () => {
    if (mailState.isGophish) {
      sendReportToApiList();
    } else {
      sendEmails();
    }

    if (isJunkReport) {
      setTimeout(() => {
        moveToJunk();
      }, 3000);
    }

    setMailState(prevState => ({ ...prevState, isReported: true }));
  };

  const onChangeFieldValue = (_event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setOtherReason(newValue || "");
  };

  const getHeader = (): any => {
    let ret = (
      <Fabric>
        <FontIcon iconName="MailTentative" className={classNames.red} />
        <Label>Choose a reason below and click the "send report" button</Label>
      </Fabric>
    );

    if (appSettings?.AutoDetect) {
      if (mailState.isSafe) {
        ret = (
          <Fabric>
            <FontIcon iconName="CheckMark" className={classNames.green} />
            <Label>Looks safe</Label>
          </Fabric>
        );
      } else {
        ret = (
          <Fabric>
            <FontIcon iconName="ReportHacked" className={classNames.red} />
            <Label>Phishing mail detected</Label>
          </Fabric>
        );
      }
    }

    if (mailState.isReported && mailState.isGophish) {
      ret = (
        <Fabric>
          <FontIcon iconName="MailCheck" className={classNames.green} />
          <Label>Good job! You have successfully spotted a Phishing attempt.</Label>
        </Fabric>
      );
    }

    if (mailState.isReported && !mailState.isGophish) {
      ret = (
        <Fabric>
          <FontIcon iconName="MailAlert" className={classNames.green} />
          <Label>Phishing email has been reported!</Label>
        </Fabric>
      );
    }

    return ret;
  };

  const getReportPanel = (): any => {
    if (mailState.isReported) {
      return <Fabric></Fabric>;
    }

    if (mailState.isSafe) {
      return (
        <Fabric>
          <Stack tokens={itemAlignmentsStackTokens}>
            <Stack.Item align="auto">
              <Label>Report a phishing mail</Label>
            </Stack.Item>
            <Stack.Item align="auto">
              <ChoiceGroup
                defaultSelectedKey={reason}
                options={options}
                onChange={onChangeOption}
                label="Reason"
                required={true}
              />
            </Stack.Item>
            <Stack.Item align="auto">
              <Separator />
            </Stack.Item>
            {reason == "other" ? (
              <Stack.Item align="auto">
                <TextField required label="Reason:" multiline rows={3} onChange={onChangeFieldValue} />
                <Separator />
              </Stack.Item>
            ) : null}
            {reason == "spam" ? (
              <Stack.Item align="auto">
                <Checkbox checked={isJunkReport} label="Move to junk/spam" onChange={onChangeIsJunkReport} />
                <Separator />
              </Stack.Item>
            ) : null}
            <Stack.Item align="auto">
              <PrimaryButton
                iconProps={{ iconName: "ReportHacked" }}
                ariaDescription="Send report"
                onClick={sendReport}
                style={{ width: "100%" }}
              >
                Send report
              </PrimaryButton>
            </Stack.Item>
          </Stack>
        </Fabric>
      );
    }

    return <Fabric></Fabric>;
  };

  const writeLog = (text: any) => {
    console.log(text);

    if (appSettings?.ShowLog) {
      logInput.current.value += text + "\n";
    }
  };

  // http://phish_server/?rid=1234567
  // http://phish_server/report?rid=1234567
  //@ts-ignore
  const getGophishLink = (text: any): string => {
    let ret = "";

    text.indexOf("");

    return ret;
  };

  if (!isOfficeInitialized || appSettings === null) {
    return (
      <Progress title={title} logo="assets/logo-filled.png" message="Please sideload your addin to see app body." />
    );
  }

  let messageIcon = getHeader();
  let reportPanel = getReportPanel();

  return (
    <div>
      <div style={{ textAlign: "center" }}>{messageIcon}</div>
      <Separator />
      {reportPanel}
      {appSettings?.ShowLog ? (
        <textarea style={{ height: "100px", width: "100%" }} ref={logInput} id="logTextarea" name="logTextarea" />
      ) : (
        ""
      )}
    </div>
  );
};
