chrome.runtime.onInstalled.addListerner(() => {
  chrome.storage.sync.get(["openAiApiKey"]);
});
