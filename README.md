## Table of contents
* [General info](#general-info)
* [Code](#Code)
* [Setup](#setup)
* [Install local](#Test-the-plugin-(in-outlook-web-client))
* [Install org](#Deploy-to-all)
* [Debugging](#Debugging)

## General info
This plugin makes it easy to report phishing for end-users. It will report using the native report function in gophish if it is a gophish phishing mail, if not it will forwared the reported email. It works in all outlook clients (android, ios, macos, windows & web outlook) and a demo bellow,
<img src=doc/outlook-gophish-reporter-plugin.gif>


## Code
This template is written using [TypeScript](http://www.typescriptlang.org/). For the JavaScript version of this template, go to [Office-Addin-TaskPane-React-JS](https://github.com/OfficeDev/Office-Addin-TaskPane-React-JS)
	
	
## Setup
1.Clone repo:

```
$ git clone https://github.com/dwtechnologies/gophish-owa-phishing-reporter.git

```
2.Make your changes and build

```
$ npm run build

```
3.Upload files to static hosting of your choice (AWS S3 etc).

4.Make changes for you env in manifest.xml 

4.1 Take a look and change the IconUrl

4.2 Change the SourceLocaion to match the static hosting



## Test the plugin (in outlook web client)

1.Go to an e-mail, select Get Add-ins icon Get Add-ins (see screenshot bellow).

<img src=doc/testing-outlook-owa-plugin.png>

2.Select My add-ins.

3.Go to the bottom of the page to Custom add-ins.


4.Select Add a custom add-in, then add the manifest.xml either by using Add from URL or Add from file.

## Deploy to all

1.Go to Office 365 admin.

2.Settings > Add-in > Deploy Add-in > Upload Custom apps.

3.Add manifest.xml as URL or file.


## Debugging

### Outlook client

Edit the settings.json in the outlook client folder to set debug to true
```
        "ShowLog": false, (debug true/false)
        "Headers": ["", ""], (add headers)
        "Contents": [""],    (catch contents)
        "Emails": ["email@email.com"], (Forward Phishing emails to)
        "ApiUrls": ["{url}/report?rid={rid}"] (GoPhish report url)
```
### Outlook OWA
If you use the web version of outlook (OWA), then the browser developer tools / console (F12) is your friend.


# Todo
* When reporting "spam/marketing", use office365 junk flagging function
* When reporting suspicious sender or other reason, use following API's before sending raw mail
* * One or several api's from https://zeltser.com/lookup-malicious-websites/
* Before sending a suspicious mail, append information about IP owner and abuse mail and rebuild the mail so it is easy for the support to forward confirmed phishing mails for takedowns
