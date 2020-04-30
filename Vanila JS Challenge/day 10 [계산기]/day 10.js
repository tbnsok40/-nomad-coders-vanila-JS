let display = document.getElementById("display");

function add(char) {
  //   display = document.getElementById("display");
  display.value = display.value + char;
}
function calculate() {
  //   display = document.getElementById("display");
  var result = eval(display.value); // 식을 계산하고 result 변수에 저장합니다.
  document.getElementById("result").value = result;
}

function reset() {
  document.getElementById("display").value = "";
  document.getElementById("result").value = "";
}

// enter 치면 calculate작동 설정
function enter() {
  if (event.keyCode === 13) {
    ///keyCode: 13 is enter i guess
    calculate();
  }
}

// display.addeventListener("keypress", function enter(event) {
//   if (event.keyCode === 13) {
//     calculate();
//   }
// });
