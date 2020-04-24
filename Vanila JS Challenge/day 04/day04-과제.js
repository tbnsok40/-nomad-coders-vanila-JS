// function init() {
//   window.addEventListener("resize", handleResize);
// }
// init();

function handleResize() {
  var intFrameWidth = window.innerWidth;
  if (intFrameWidth > 900) {
    document.querySelector("body").style.backgroundColor = "#2ecc71"; // COLOR GREEN
  } else if (900 > intFrameWidth && intFrameWidth > 600) {
    document.querySelector("body").style.backgroundColor = "#00a8ff"; // COLOR BLUE
  } else {
    document.querySelector("body").style.backgroundColor = "#e74c3c"; // COLOR RED
  }

  //   document.querySelector("body").style.backgroundColor = "#3498db";
}
window.addEventListener("resize", handleResize);
