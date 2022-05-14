// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({
  color
}) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    function () {
      console.log("What???")

      alert("Loaded")
      console.log("changeColor ssssss");
      // document.getElementById("box").innerHTML = "Changed";
      // // $("#box").html("changed");

      // The body of this function will be execuetd as a content script inside the
      // current page
      chrome.storage.sync.get("color", ({
        color
      }) => {
        document.body.style.backgroundColor = color;
      });

    }
  });


});