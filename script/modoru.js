/* eslint-disable */

(function () {
  let originalPushState = window.history.pushState;
  let originalReplaceState = window.history.replaceState;
  let key = '__MODORU';

  Object.defineProperty(window.history, 'pushState', {
    configurable: true,
    writable: true,
    value(data, unused, url) {
      if (typeof data === 'object' && data !== null) {
        data[key] = ((window.history.state || {})[key] || 0) + 1;
      }
      return originalPushState.call(this, data, unused, url);
    },
  });

  Object.defineProperty(window.history, 'replaceState', {
    configurable: true,
    writable: true,
    value(data, unused, url) {
      if (typeof data === 'object' && data !== null) {
        data[key] = (window.history.state || {})[key] || 0;
      }
      return originalReplaceState.call(this, data, unused, url);
    },
  });
})();
