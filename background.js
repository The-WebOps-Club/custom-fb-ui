// background.js for Custom-FB-UI Chrome Extension

// Called when the url of a tab changes or when a new tab is opened.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the tab belongs to wikipedia.org ...
  if (tab.url.indexOf('://www.facebook.com/') > -1) {
    // ... show the page action.
    chrome.pageAction.show(tabId);
    chrome.tabs.executeScript(tabId, {file: "main.js"});
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
