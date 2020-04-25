const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
  event.preventDefault(); // default로 입력된 글자를 어디론가 보내버리는데, 이 default 설정을 지운다

  const currentValue = input.value; // input.value는 입력된 값이고 이를 currentValue 상수에 저장한다. 그것을 아래의 paintGreeting의 인자로 던진다.
  paintGreeting(currentValue); //그럼 이 함수는 인자로 받은 cuurentvalue를 인자로, hello+인자를 프린팅함
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerText = `hello ${text}`;
  saveName(text);
}
function loadname() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    /// SHE IS NOT

    askForName(); // 봐, 이 함수가 없었으면,
    // akfForName함수 내의 form.classList.add(SHOWING_CN)이 작동X
    //
  } else {
    /// SHE IS
    paintGreeting(currentUser);
  }
}
function init() {
  loadname();
}
init();
