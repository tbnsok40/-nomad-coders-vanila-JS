const span = document.querySelector("#val");
const slide = document.querySelector("#slide");
const button = document.querySelector("#limitButton");

function displayValue(e) {
  const inp = e.target || this;
  upperbound = +inp.value;
  span.innerHTML = upperbound;
}

displayValue.call(slide, {});

////////////////////////////////////////////////////////
const span3 = document.getElementById("values3");
const span2 = document.getElementById("values");
const result = document.getElementById("result");

var getNum = function () {
  var chooseNum = document.getElementById("input_num").value;
  span2.innerHTML = chooseNum;
  let randomFloat = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  randomNum = randomFloat(0, upperbound);
  span3.innerHTML = randomNum;

  if (chooseNum == randomNum) {
    result.innerHTML = "Hey Winner";
  } else {
    result.innerHTML = "Looser!!";
  }
};
//나는 윗줄 span이 태그 span인줄 알았는데 아니였다. 그냥 이름이였을 뿐(여기span과 아래span이 충돌해서 문제가 생겼었음, span2로 바꿔주니 해결)

// function changeLimits() {
//   const minVal = +min.value;
//   const maxVal = +max.value;
//   const value = Math.floor(
//     (maxVal - minVal) * (Math.random() * (0.8 - 0.2) + 0.2) + minVal
//   );
//   slide.setAttribute("min", minVal);
//   slide.setAttribute("max", maxVal);
//   slide.setAttribute("value", value);
//   displayValue.call(slide, {});
// }

// function checkPostiveInteger(e) {
//   let c = e.keyCode;
//   if (
//     (c < 37 && c != 8 && c != 9) ||
//     (c > 40 && c < 48 && c != 46) ||
//     (c > 57 && c < 96) ||
//     (c > 105 && c != 109 && c != 189)
//   ) {
//     e.preventDefault();
//   }
//   if (c === 13 && checkValidLimits()) {
//     changeLimits();
//   }
// }

// function checkValidLimits() {
//   return !min.value || !max.value || +max.value <= +min.value
//     ? ((button.disabled = true), false)
//     : ((button.disabled = false), true);
// }
