(() => {
  const store = window.PICADOO_STORE || {};

  function detectPlatform() {
    const ua = navigator.userAgent || '';
    if (/android/i.test(ua)) return 'android';
    if (/iPad|iPhone|iPod/i.test(ua)) return 'ios';
    if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) return 'ios';
    return 'other';
  }

  function showStoreChoices() {
    document.documentElement.classList.remove('picadoo-download-pending');
    document.documentElement.classList.add('picadoo-download-ready');
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
    const root = document.querySelector('[data-picadoo-auto-redirect]');
    if (!root) {
      showStoreChoices();
      return;
    }

    document.documentElement.classList.add('picadoo-download-pending');
    const redirected = redirectToStore();

    if (!redirected) {
      showStoreChoices();
      return;
    }

    // Redirect attempted but may not leave the page (in-app browser, popup blockers).
    window.setTimeout(showStoreChoices, 2500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAutoRedirect);
  } else {
    initAutoRedirect();
  }
})();
