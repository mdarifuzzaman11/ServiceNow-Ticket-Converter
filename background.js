chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({url: 'popup.html'});
});
