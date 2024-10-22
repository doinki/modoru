/* eslint-disable */

(function () {
  let originalPushState = window.history.pushState.bind(window.history);
  let key = 'MODORU_INDEX';

  Object.defineProperty(window.history, 'pushState', {
    configurable: true,
    value(data, unused, url) {
      data[key] = ((window.history.state || {})[key] || 0) + 1;

      return originalPushState(data, unused, url);
    },
  });
})();
