var injected = false;

chrome.tabs.onActivated.addListener(tab => {
    
    chrome.tabs.onUpdated.addListener(function(activeInfo) {getActivatedTab();});
    function getActivatedTab(){
        chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
            try{
                if(tabs[0]!==undefined){
                
                    if(/^https:\/\/www\.google/.test(tabs[0].url)){
                        chrome.tabs.insertCSS(null, {file: 'main.css'});
                        chrome.tabs.executeScript(null, {file: 'foreground.js'}, () => {
                            console.log("I injected")
                            injected = true;
                        });        
                    }
                    if(/^https:\/\/www\.youtube/.test(tabs[0].url) || /^https:\/\/youtube/.test(tabs[0].url)){
                        chrome.tabs.insertCSS(null, {file: 'yt.css'});
                        chrome.tabs.executeScript(null, {file: 'foreground.js'}, () => {
                            console.log("I injected")
                            injected = true;
                        });        
                    }
                }
            }
            catch(err){
                setTimeout(function() {
                    if (!injected) {
                        getActivatedTab();
                    }
                },100);
            }
        })
    }       
});
