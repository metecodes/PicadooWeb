(() => {
  const store = window.PICADOO_STORE || {};

  function detectPlatform() {
    const ua = navigator.userAgent || '';
    if (/android/i.test(ua)) return 'android';
    if (/iPad|iPhone|iPod/i.test(ua)) return 'ios';
    if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) return 'ios';
    return 'other';
  }

  function redirectToStore() {
    const platform = detectPlatform();

    if (platform === 'android' && store.playStore) {
      window.location.replace(store.playStore);
      return true;
    }

    if (platform === 'ios' && store.appStore) {
      window.location.replace(store.appStore);
      return true;
    }

    return false;
  }

  window.picadooDetectPlatform = detectPlatform;
  window.picadooRedirectToStore = redirectToStore;

  function initAutoRedirect() {
    if (document.body?.dataset.picadooAutoRedirect !== 'true') return;

    document.documentElement.classList.add('picadoo-download-pending');
    const redirected = redirectToStore();
    if (!redirected) {
      document.documentElement.classList.remove('picadoo-download-pending');
      document.documentElement.classList.add('picadoo-download-ready');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAutoRedirect);
  } else {
    initAutoRedirect();
  }
})();
