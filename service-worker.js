chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  let s;
  await chrome.tabs.captureVisibleTab((screenshot) => {
    console.log({ screenshot });
    s = String(screenshot);
  });
  console.log({ outside: s });
  sendResponse({ value: s });
});
