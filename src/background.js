
chrome.tabs.onActivated.addListener(async function()  {
    async function getCurrentTab() {
        let queryOptions = { active: true, currentWindow: true };
        let tabs = await chrome.tabs.query(queryOptions);
        return tabs[0];
    }
    let tab = await getCurrentTab();
    chrome.tabs.onUpdated.addListener(async function() {
        try{
            if(/^https:\/\/www\.google/.test(tab.url)){
                chrome.scripting.insertCSS({
                    target: { tabId: tab.id },
                    files: ["main.css"]
                });
                chrome.scripting.executeScript({
                    target: {tabId: tab.id},
                    files: ['foreground.js']
                });
            }
            if(/^https:\/\/www\.youtube/.test(tab.url) || /^https:\/\/youtube/.test(tab.url)){
                chrome.scripting.insertCSS({
                    target: { tabId: tab.id },
                    files: ["yt.css"]
                });
                chrome.scripting.executeScript({
                    target: {tabId: tab.id},
                    files: ['foreground.js']
                });
            }
        }catch(err){
            console.log(err)
        }
    });
});
