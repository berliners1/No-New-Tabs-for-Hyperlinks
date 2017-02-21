chrome.browserAction.setBadgeBackgroundColor({ color: [55, 55, 75, 255] });

chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {

    if (''+message.data) {
        chrome.tabs.get(sender.tab.id, function(tab) {
            if (tab.index >= 0) { // tab is visible
                chrome.browserAction.setBadgeText({tabId:tab.id, text:''+message.data});
            }
        });
    }
  	
    
  });

