## Table of contents
* [General info](#general-info)
* [Code](#Code)
* [Setup](#setup)
* [Install local](#install-local)
* [Install org](#install-org)
* [Debugging](#Debugging)

## General info
This plugin makes it easy to report phishing for end-users. It will report using the native report function in gophish if it is a gophish phishing mail, if not it will capture all headers and content and send it to a mail defined where a security team can take a closer look.
This project is simple Lorem ipsum dolor generator.

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
3.Upload files to storage of your choice.

4.Make changes for you env in manifest.xml 



## Install local
Add add-in from a URL or file in Outlook.

1.Select Get Add-ins icon Get Add-ins.

2.Select My add-ins.

3.Go to the bottom of the page to Custom add-ins.

4.Select Add a custom add-in, then add the manifest.xml either by using Add from URL or Add from file.

## Install org

1.Go to Office 365 admin.

2.Settings > Add-in > Deploy Add-in > Upload Custom apps.

3.Add manifest.xml as URL or file.


## Debugging

### Outlook client

    settings.json

        "ShowLog": false, (debug true/false)
        "Headers": ["", ""], (add headers)
        "Contents": [""],    (catch contents)
        "Emails": ["email@email.com"], (Forward Phishing emails to)
        "ApiUrls": ["{url}/report?rid={rid}"] (GoPhish report url)

### Outlook OWA

Browser developer tools F12
