// DOMS ELEMENTS  ---------------------------------------------------------
const dom_start = document.querySelector("#start");
const dom_quiz = document.querySelector("#quiz");
const dom_score = document.querySelector("#scoreContainer");

// FUNCTIONS ---------------------------------------------------------

// Hide the given element
function hide(element) {
  element.style.display = "none";
}

// Show the given element
function show(element) {
  element.style.display = "block";
}

// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
