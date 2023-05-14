function setPageJS(content){
  var script = document.createElement('script');
  script.textContent = content;
  (document.head||document.documentElement).appendChild(script);
  script.remove();
}

// Disable serviceWorker API permanently, never ask
setPageJS(`
  navigator.serviceWorker.register = undefined;
  navigator.serviceWorker.register = function(path, options) {
    return new Promise((resolve, reject) => {
      reject("Service Worker API is disabled!");
    });
  };
  navigator.serviceWorker.controller = undefined;
  navigator.serviceWorker = undefined;
`);
