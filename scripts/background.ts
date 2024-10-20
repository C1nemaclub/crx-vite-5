console.log('Hello from the background script!');
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;

  await chrome.sidePanel.setOptions({
    tabId,
    path: 'index.html',
    enabled: true,
  });
});
