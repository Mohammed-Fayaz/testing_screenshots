document.addEventListener("click", (e) => {
  console.log({ event: e });
  (async () => {
    const response = await chrome.runtime.sendMessage({ greeting: "hello" });
    // do something with response here, not outside the function
    console.log({ responseReceived: response });
  })();
});
