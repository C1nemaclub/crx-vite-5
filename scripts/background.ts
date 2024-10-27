chrome.runtime.onInstalled.addListener(() => {
  // Set options for the side panel if necessary
  chrome.sidePanel.setOptions({
    path: '../index.html', // This should match the path in the manifest
    enabled: true,
  });
});

// Optionally, you can set up an event listener to open the side panel on a specific action
chrome.action.onClicked.addListener(() => {
  chrome.sidePanel.setOptions({
    path: '../index.html',
    enabled: true,
  });
});

// if (import.meta.hot) {
//   import.meta.hot.accept(() => {
//     chrome.runtime.reload();
//   });
// }
