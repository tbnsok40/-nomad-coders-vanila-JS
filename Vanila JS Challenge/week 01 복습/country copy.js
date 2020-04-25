var selectElem = document.getElementById("select");
var pElem = document.getElementById("p");
const body = document.querySelector("body");
// When a new <option> is selected
selectElem.addEventListener("change", function () {
  var index = selectElem.value;

  //////////

  const image = new Image();
  image.src = `C:/Users/User/Desktop/html실습/Vanila JS Challenge/week 01 복습/${index}.jpg`;
  image.classList.add("bgImage"); // 목록에 문자열 추가..? 왜 추가해? bgImage 왜 필요?
  body.appendChild(image);
  // Add that data to the <p>
  pElem.innerHTML = "Where U From: " + index;
  // localStorage.setItem(country, index);
});
