if (location.origin === 'https://justinjin04.github.io') {
  const page = document.currentScript.dataset.page;

  window.addEventListener('pageshow', () => {
    fetch(`https://39.96.2.45/pageview/${page}`, {
      method: 'POST',
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      keepalive: true,
    }).catch(() => {
      // The site remains usable when the log endpoint is unreachable.
    });
  });
}
