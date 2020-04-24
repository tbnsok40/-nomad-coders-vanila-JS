// 클릭시 변하게 한다///////////////////////////////////////
// function handleClick() {
//   title.style.color = "red";
// }
// title.addEventListener("click", handleClick);

const title = document.querySelector("h2");

document.querySelector("h2").onmouseenter = function () {
  mouseEnter();
};
document.querySelector("h2").onmouseleave = function () {
  mouseLeave();
};

document.addEventListener("contextmenu", rightClick);
window.addEventListener("resize", resizeHandle);

function resizeHandle() {
  var txt = "You just resized!";
  document.querySelector("h2").innerHTML = txt;
  document.querySelector("h2").style.color = "#9b59b6";
}

function mouseEnter() {
  document.querySelector("h2").style.color = "#1abc9c";
  title.innerText = "The mouse is here";
}

function mouseLeave() {
  document.querySelector("h2").style.color = "#3498db";
  title.innerText = "The mouse is gone";
}

function rightClick() {
  var x = document.querySelector("h2");
  x.innerHTML = "That was a right click";
  x.style.color = "#e74c3c";
}

////////////////SUPER HANDLER//////////////////////
// const superEventHandler = {
//   mouseEnter: function () {
//     document.getElementsByTagName("h2").style.color = "#1abc9c";
//     h2.innerText = "The mouse is here";
//   },
//   mouseLeave: function () {
//     document.getElementsByTagName("h2").style.color = "#3498db";
//     h2.innerText = "The mouse is gone";
//   },
//   resizeHandle: function () {
//     var txt = "You just resized!";
//     document.getElementsByTagName("h2").innerHTML = txt;
//     document.getElementsByTagName("h2").style.color = "#9b59b6";
//   },
//   rightClick: function () {
//     var x = document.getElementsByTagName("h2");
//     x.innerHTML = "That was a right click";
//     x.style.color = "#e74c3c";
//   },
// };

// ///RESIZING///
// window.addEventListener("resize", myFunction);

// function resizeHandle() {
//   var txt = "You just resized!";
//   document.getElementsByTagName("h2").innerHTML = txt;
//   document.getElementsByTagName("h2").style.color = "#9b59b6";
// }
// /////////////////////////////////////////////////////////////

// ///ON MOUNSE///
// document.getElementsByTagName(h2).onmouseenter = function () {
//   mouseEnter();
// };
// document.getElementsByTagName(h2).onmouseleave = function () {
//   mouseLeave();
// };

// function mouseEnter() {
//   document.getElementsByTagName(h2).style.color = "#1abc9c";
//   title.innerText = "The mouse is here";
// }
// function mouseLeave() {
//   document.getElementsByTagName(h2).style.color = "#3498db";
//   title.innerText = "The mouse is gone";
// }
// ///////////////////////////////////////////////////////////////

// ///RIGHT CLICK///
// document.addEventListener("contextmenu", rightClick);

// function rightClick() {
//   var x = document.getElementsByTagName(h2);
//   x.innerHTML = "That was a right click";
//   x.style.color = "#e74c3c";
// }
///////////////////////////////////////////////////////////////

/// mouseTarget.addEventListener("mouseenter", mouseTarget);
// handleResize 와 handleResize()의 차이: 전자는 필요할 때 호출, in this case it would be resizing moment.addEventListener
// the other one is 호출 it right fucking now
// #js want to listen what to CustomElementRegistry, for in this case is 'resize'

// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("click", handleClick); // 원할 때 handleClick 호출
// }
// init();
