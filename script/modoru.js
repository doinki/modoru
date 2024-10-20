/* eslint-disable */

(function () {
  let originalPushState = window.history.pushState.bind(window.history);
  let key = 'MODORU_INDEX';

  window.history.pushState = new Proxy(window.history.pushState, {
    apply(_, __, [data, unused, url]) {
      return originalPushState(
        {
          [key]: (window.history.state[key] || 0) + 1,
          ...data,
        },
        unused,
        url,
      );
    },
  });
})();
