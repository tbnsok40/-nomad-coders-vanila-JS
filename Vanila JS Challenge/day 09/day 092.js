const span = document.querySelector("#values");

var getNum = function () {
  var temp = document.getElementById("input_num").value;
  span.innerHTML = temp;
};

let randomFloat = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
// /// *(최대값 범위 지정) /// + min(=최소값 지정)

console.log(randomFloat(0, value));
span3.innerHTML = randomFloat(0, value);
