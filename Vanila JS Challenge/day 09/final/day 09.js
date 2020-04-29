const span = document.querySelector("#val");
const slide = document.querySelector("#slide");
const button = document.querySelector("#limitButton");
let upperbound;

const span3 = document.getElementById("values3");
const result = document.getElementById("result");
const range = document.querySelector(".rangebar");
const bar = range.querySelector("input");

const inputbox = document.getElementById("p1ay");

// 여기서 form.getElementById is not a function뜨는 이유가뭘까,,
// const form = document.querySelector("form");
// const btn = form.getElementById("p1ay");

const form = document.querySelector("form");
const btn = form.querySelector(".p1ay");

function handleClick() {
  upperbound = bar.value;
  span.innerHTML = upperbound;
}

function getNum() {
  const span2 = document.getElementById("values");
  chooseNum = document.getElementById("input_num").value;
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
}

function init() {
  bar.addEventListener("click", handleClick);
  btn.addEventListener("click", getNum);
}
init();
//나는 윗줄 span이 태그 span인줄 알았는데 아니였다. 그냥 이름이였을 뿐(여기span과 아래span이 충돌해서 문제가 생겼었음, span2로 바꿔주니 해결)
