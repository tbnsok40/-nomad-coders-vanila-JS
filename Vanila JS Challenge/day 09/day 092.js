const span = document.querySelector("#values");

var getNum = function () {
  var temp = document.getElementById("input_num").value;
  span.innerHTML = temp;
};
