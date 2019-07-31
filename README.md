# Tesla VIN Checker Chrome Extension

Small Chrome extension to check for the presence of a VIN in the `Tesla` on the "My Tesla" page.

## Intructions for usage:

 - Head to the [releases](https://github.com/benlancaster/tesla-vin-check-crx/releases) tab
 - Expand the "Assets" tab and download _either_ "Source code (zip)" or "Source code (tar.gz)" depending on your preference
 - Unpack the file to wherever you like
 - Head to [chrome://extensions](chrome://extensions)
 - Hit the "Load unpacked" button and point the file chooser to the folder you just unzipped
 - Log in to your Tesla account as normal, head to the "Manage" page of your Tesla and you should see the VIN like so: 

![Screenshot](screenshot.png)

## Features:

 - Not a lot, it just looks for a VIN in the `Tesla` object on the `window` and writes it to the page
 - Doesn't use/store/save/send your login credentials anywhere 
