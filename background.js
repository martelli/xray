chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Blocked: "+details.url);
    return {cancel: true};
  },
   {urls: ["https://static.infoglobo.com.br/paywall/*", "https://s1.wp.com/wp-content/themes/vip/abril-plugins/abril-piano/js/piano.js*", "https://paywall.folha.uol.com.br/*", "https://acesso.estadao.com.br/paywall/pw.js", "https://*/zephr/feature-decisions"]},
  ["blocking"]
);
