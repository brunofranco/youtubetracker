  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab)
  {
  	var url = changeInfo.url;
	var path = chrome.runtime.getURL("/icon.png");
	if (url.indexOf("youtube") != -1) {
		if (localStorage.getItem(url) == null) {
			localStorage[url] = true
		} else {
			var notifId = Math.random().toString();
			chrome.notifications.create(
			  notifId,{   
			      type: "basic", 
			      title: "Youtube Tracker", 
			      message: "Video already seen",
			      iconUrl: path
			  },
			  function() {
			  	    setTimeout(function(){ 
        				chrome.notifications.clear(notifId, function() {});
    				}, 1500); 
			  }
			);
		}
	}
  });
