// let button = document.querySelector("btn");
// let display = document.querySelector("input");

// function add() {
//   var val = button.value;
//   display.value = display.value + val;
// }
// function calculate() {
//   var result = eval(display.value); // 식을 계산하고 result 변수에 저장합니다.
//   document.querySelector("input").value = result;
// }
// function init() {
//   button.addEventListener("click", add);
// }
// init();

let event;
let tmp = 0;
let result;

window.add = function (char) {
  display.value = char;
  tmp = tmp + display.value;
};
window.calculate = function () {
  // var display = document.getElementById("display");
  result = eval(tmp); // 식을 계산하고 result 변수에 저장합니다.
  document.getElementById("display").value = result;
  tmp = result; // 이걸 안해주면, 9+9 = 18 -> 18 / 2 = 10이 되는 불상사가 생긴다. (중요)
};

window.reset = function () {
  document.getElementById("display").value = "";
  // document.getElementById("result").value = "";
  tmp = 0;
};
window.enter = function () {
  if (event.keycode === 13) {
    calculate();
  }
};
