window.setTimeout(() => {
  console.log("setting data");

  window.tidioChatApi.setVisitorData({
    user: "Test",
    game: "make images in order"
  });

}, 5000);
