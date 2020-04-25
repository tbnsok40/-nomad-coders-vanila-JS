var selectElem = document.getElementById("select");
var pElem = document.getElementById("p");
const body = document.querySelector("body");
const COUNTRY = "country";
// When a new <option> is selected
selectElem.addEventListener("change", function () {
  var index = selectElem.value;
  var country = "country";

  saveName(COUNTRY, index);
  //////////
  coname = localStorage.getItem(COUNTRY);
  paintImage(coname);
  // Add that data to the <p>
  pElem.innerHTML = "Where U From: " + index;
  // localStorage.setItem(country, index);
});

function saveName(COUNTRY, index) {
  localStorage.setItem(COUNTRY, index);
  // 이 함수 덕분에, 인풋창에 입력한 내 이름이, 새로고침을 하여도 없어지지 않는다. User_LocalStorage
}

function paintImage(coname) {
  const image = new Image();
  image.src = `C:/Users/User/Desktop/html실습/Vanila JS Challenge/week 01 복습/${coname}.jpg`;
  image.classList.add("bgImage"); // 목록에 문자열 추가..? 왜 추가해? bgImage 왜 필요?
  body.appendChild(image); //append는 문자열을 삽입할 수 있는데, appendChild는 문자열은 못넣는다고 한다
  /// option바꿀때마다 사진 바꾸려면,option을 바꿀 때, 새로고침 주는 효과,,?
} //appendChild: 말그대로 child를 append한다, 어디에? body라는 부모(?노드에)
