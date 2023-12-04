let userProfile = document.getElementById("user-profile");
let bell = document.getElementById("notification-bell");
let userDetail = document.getElementById("user-details");
let bellInfo = document.getElementById("notification-details");
let container = document.querySelector("main");
let closePlan = document.getElementById("close-plan");
let form = document.getElementById("form");
let arrowCollapse = document.getElementById("collapse-arrow");
let theArrow = document.querySelector(".toggler");
let bigCollapse = document.querySelector(".the-collapse");
let nonCollapseTitles = document.querySelectorAll(".non-collapse-p");
let smallCollapses = document.querySelectorAll(".setup-nav");
let selections = document.querySelectorAll(".selection");
let bar = document.querySelector(".bar");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

nonCollapseTitles.forEach(function (nonCollapseTitle, index) {
  nonCollapseTitle.parentElement.parentElement.addEventListener(
    "click",
    function () {
      // Remove setup-hover from all elements
      smallCollapses.forEach(function (smallCollapse) {
        smallCollapse.classList.remove("setup-hover");
      });

      // Add setup-hover to the clicked element
      let currentSmallCollapse = smallCollapses[index];
      currentSmallCollapse.classList.add("setup-hover");
    }
  );
});

// bar setup

let selectedCount = 0;
let counter = document.querySelector(".counter");

// bar setup

function updateBarAndCounter() {
  const totalSelections = selections.length;
  const percentage = (selectedCount / totalSelections) * 100;
  bar.style.width = percentage + "%";
  counter.textContent = selectedCount;
}

selections.forEach(function (selection) {
  selection.addEventListener("click", function () {
    if (selection.classList.contains("selected")) {
      selection.classList.remove("selected");
      selectedCount--;
    } else {
      selection.classList.add("selected");
      selectedCount++;
    }
    updateBarAndCounter();
  });
});

// Initial update of bar and counter on page load
updateBarAndCounter();

// bar setup

// spinner

selections.forEach(function (selection) {
  selection.addEventListener("click", function () {
    var clickedElement = this; // Store reference to the clicked element

    if (
      clickedElement.classList.contains("spined") ||
      clickedElement.classList.contains("check")
    ) {
      clickedElement.classList.remove("check");
      clickedElement.classList.remove("spined");
    } else {
      // If checked is hidden, show checked and hide spinner

      clickedElement.classList.add("spined");
      setTimeout(function () {
        clickedElement.classList.add("check");
      }, 500);
    }
  });
});

// spinner

arrowCollapse.addEventListener("click", function () {
  // Toggle classes for animation
  if (arrowCollapse.classList.contains("up")) {
    arrowCollapse.classList.remove("up");
    arrowCollapse.classList.add("down", "rotate-down");
    bigCollapse.classList.add("de-collapse");
  } else {
    arrowCollapse.classList.remove("down", "rotate-down");
    arrowCollapse.classList.add("up", "rotate-up");
    bigCollapse.classList.remove("de-collapse");
  }
});

userProfile.addEventListener("click", function () {
  if (!bellInfo.classList.contains("user-off-all")) {
    bellInfo.classList.add("user-off-all");
  }
  userDetail.classList.remove("user-off-all");
});

bell.addEventListener("click", function () {
  if (!userDetail.classList.contains("user-off-all")) {
    userDetail.classList.add("user-off-all");
  }
  bellInfo.classList.remove("user-off-all");
});

container.addEventListener("click", function () {
  userDetail.classList.add("user-off-all");
  bellInfo.classList.add("user-off-all");
});

closePlan.addEventListener("click", function () {
  this.parentElement.style.visibility = "hidden";
});

// document.querySelector("body").addEventListener("click", function () {
//   if (!bellInfo.classList.contains("user-off-all")) {
//     bellInfo.classList.add("user-off-all");
//   }
//   if (!userDetail.classList.contains("user-off-all")) {
//     userDetail.classList.add("user-off-all");
//   }
// });
