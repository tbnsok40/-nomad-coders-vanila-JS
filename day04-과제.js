// function init() {
//   window.addEventListener("resize", handleResize);
// }
// init();

var intFrameWidth = window.innerWidth;
window.addEventListener("resize", handleResize);
function handleResize() {
  if (intFrameWidth < 700) {
    document.querySelector("body").style.backgroundColor = "#2ecc71"; // COLOR GREEN
    //   } else if (80 > intFrameWidth && intFrameWidth > 40) {
    //     document.querySelector("body").style.backgroundColor = "#2ecc71";
  } else {
    document.querySelector("body").style.backgroundColor = "#e74c3c"; // COLOR RED
  }

  //   document.querySelector("body").style.backgroundColor = "#3498db";
}
