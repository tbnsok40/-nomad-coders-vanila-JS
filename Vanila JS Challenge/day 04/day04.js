const title = document.querySelector("#title");

const BASE_COLOR = "rgb(147, 123, 252)";
const OTHER_COLOR = "rgb(234, 68, 68)";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
  //   title.addEventListener("click", handleClick);
}
init();

//자바스크립트 파일에 css를 올려놓는것은 그닥 깔끔하지 않으므로
//css파일을 새로이 만들어준다.
