const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const h2 = document.getElementById("p");
// const DDAY = document.getElementById("d-day");

const superEventHandler = {
  onTop: function () {
    h2.innerHTML = "The mouse is here";
    h2.style.color = colors[0];
    // DDAY.style.color = color[0];
  },
  leaves: function () {
    h2.innerHTML = "The mouse is gone";
    h2.style.color = colors[1];
  },
  resize: function () {
    h2.innerHTML = "You just resized!";
    h2.style.color = colors[2];
  },
  rightClick: function () {
    h2.innerHTML = "That was a right click!";
    h2.style.color = colors[4];
  },
};

h2.addEventListener("mouseenter", superEventHandler.onTop);
h2.addEventListener("mouseleave", superEventHandler.leaves);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightClick);
