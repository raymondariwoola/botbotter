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
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({
    color
  }) => {
    document.body.style.backgroundColor = color;
    let sessionIdentifier = localStorage.getItem("sessionId");
    window.location.href = "https://www.emiratesnbd.com/en/survey/beta-chatbot-survey/?u=" + sessionIdentifier;
  });

}

function editPageContent() {
  console.log("What???");
  alert("Loaded");
  console.log("changeColor ssssss");
  document.body.innerHTML = "Changed";
}

/**
 * Chatbot Rating
 */

// document.querySelector('body>app-root>app-chatbot-icon>div.chatbot-toggle-icon>div.animate>img.ng-star-inserted').click()
// document.querySelectorAll('div.float-left.pl-3.pr-3>img.p-2.header-image')[1].click()

/* Rating from 0 to 4. 0 being the lowest and 4 being the highest*/
// document.querySelectorAll('div.modal-body>div.d-flex.justify-content-center>img.ng-star-inserted')[4].click()
// document.querySelector('div.modal-footer>button.btn.btn-primary').click()

// let sessionIdentifier = localStorage.getItem("sessionId");
// "https://www.emiratesnbd.com/en/survey/beta-chatbot-survey/?u=" + sessionIdentifier



/**
 * Survey after rating
 */

// document.querySelector('a.button-link.button-link-box-4.wi.ta-center.pr-20.survey-answer').click()

// let x3 = Math.floor(Math.random() * 4); // get random integer between 0 and 3.
// let x2 = Math.floor(Math.random() * 3); // get random integer between 0 and 3.
// document.querySelectorAll('span.bo-ra-l.survey-answer.survey-answer-1.survey-answer-icon.tc-color-2.bg-opacity-2-2.fs-m.mo-fs-s')[0].click() // can use random integer.
// document.querySelectorAll('span.bo-ra-l.survey-answer.survey-answer-3.survey-answer-icon.tc-color-2.bg-opacity-2-2.fs-m.mo-fs-s')[0].click()

/* Was the chatbot helpful to resolve your query? 0 for Yes, 1 for no */
// document.querySelectorAll('span.bo-ra-l.survey-answer.survey-answer-4.survey-answer-icon.tc-color-2.bg-opacity-3-2.fs-m.mo-fs-s')[0].click()
// let xbadComment = badComments[Math.floor(Math.random() * badComments.length)]; // get random bad comments.
// query not resolved ? document.getElementById("ques_5").value = xbadComment; document.querySelectorAll('a.button-link.button-link-box-5.wi.ta-left.pr-20.next-question')[0].click() : null

/* What did you like the most about the chatbot and how can we improve? */
// let goodComments = [];
// let badComments = [];
// let xComment = "Very interactive";
// if (someVariable == "bad") {
  // xComment = badComments[Math.floor(Math.random() * badComments.length)]; // get random bad comments.
// }
// else {
  // xComment = goodComments[Math.floor(Math.random() * goodComments.length)]; // get random good comments.
// }
// document.getElementById("ques_6").value = xComment;
// document.querySelectorAll('a.button-link.button-link-box-5.wi.ta-left.pr-20.next-question')[1].click();

// document.getElementById("laEmail").value = somerandomEmail;
// document.querySelectorAll('a.button-link.button-link-box-5.wi.ta-left.pr-20.next-question')[2].click()

// document.getElementById("mobile").value = someRandomMobileNumber;
// document.getElementById('submit-button').click();
