chrome.runtime.onInstalled.addListerner(() => {
  chrome.storage.sync.get(["openAiApiKey"], (result) => {
    if (!result.openAiApiKey) {
      chrome.tabs.create({ url: "options.html" });
    }
  });
});
