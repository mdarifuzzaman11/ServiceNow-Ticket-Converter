# ServiceNow Ticket Converter

This Chrome extension converts ServiceNow ticket links from the clipboard into text and links them back to the original ticket, also it will automatically look for keywords such as "SCTASK", "RITM", "INC", "REQ" in the clipboard and when it finds a match, it will fetch the sys_id from the url and make a request to ServiceNow API to get the ticket details and then it will construct the output of the ticket information and the original link, which will be the same as the one that was in the clipboard. After constructing the output, it will copy the output to the clipboard and open Microsoft teams in a new tab, all this happens automatically as soon as user copies the link to the clipboard.

* Author: Md Arifuzzaman

## Features
* Converts ServiceNow ticket links from the clipboard into text
* Provides a link back to the original ticket
* Automatically look for keywords in the clipboard
* Automatically copy the output
* Automatically open Microsoft teams in a new tab 
* Shows  Description, Opened at, Opened by, Assigned to group of the ticket

## How to Use
1. Download and install the extension in your chrome browser
2. Copy a ServiceNow ticket link which contain keywords such as SCTASK, RITM, INC, REQ to your clipboard
3. The extension will automatically run the conversion code and copy the output, also open Microsoft teams in a new tab.

## Note

* To use this code, you need to have an account on Microsoft teams.
* This extension uses the ServiceNow API, you need to provide your ServiceNow instance name, and credentials to fetch the data.
* This code is just an example and it is intended to give you an idea of how you can build a Chrome extension that converts ServiceNow ticket links. It may not work without modification.

## How to publish this code into Chrome 
Here's a step-by-step guide to publishing and running your Chrome extension:

Create the necessary files for your extension. You'll need at least a manifest.json file and a JavaScript file. If your extension requires any HTML or CSS, you'll need those files as well.

Package your extension into a .zip file by selecting all the files and then right-clicking and selecting "compress" on Mac or "send to" -> "compressed (zipped) folder" on Windows.

Go to the Chrome Web Store Developer Dashboard by visiting https://chrome.google.com/webstore/developer/dashboard. You need to have a Google account to access this page.

Click the "Add new item" button to start the process of publishing your extension.

Fill in the required fields, such as the extension name, description, and icon. Then, click the "Upload a .zip file" button and select the .zip file you created in step 2.

After the extension is uploaded, it will be in the "Draft" state. You can continue editing the extension details and also you can upload images and videos which can be used as screenshots.

Once you're satisfied with the extension details, click the "Publish item" button. Your extension will be reviewed by the Chrome Web Store team, which can take a few days. Once it's approved, it will be available for users to install.

Once published, you can share the link of the chrome web store page with others and they can add it to chrome by visiting chrome web store page.

For testing the extension without publishing, you can load the extension in developer mode by following these steps:

Open the Extension Management page by navigating to chrome://extensions.
Enable Developer Mode by clicking the toggle switch next to Developer mode.
Click the Load unpacked button and select the extension directory.
Note: Any changes you make to the extension code will need to be repackaged into a .zip file before uploading to the Chrome Web Store, or reloading the extension in developer mode.
