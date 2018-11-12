chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Blocked: "+details.url);
    return {cancel: true};
  },
   {urls: ["https://static.infoglobo.com.br/paywall/*", "https://s1.wp.com/wp-content/themes/vip/abril-plugins/abril-piano/js/piano.js*"]},
  ["blocking"]
);
