// Ember Page Reader — service worker: on toolbar click, stash the page data
// into extension storage and log a one-line summary (Ember reads it via CDP/Playwright).
chrome.action.onClicked.addListener(async (tab) => {
  try {
    const [res] = await chrome.scripting.executeScript({ target: { tabId: tab.id }, func: () => window.__emberPageData || null });
    const data = res && res.result;
    if (data) { await chrome.storage.local.set({ lastPage: data }); console.log("Ember read:", data.title, data.textLength, "chars"); }
  } catch (e) { console.log("Ember Page Reader error:", String(e)); }
});
