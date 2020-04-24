const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  /// 첫번째 방법 ///
    const hasClass = title.classList.contains(CLICKED_CLASS);

    if (hasClass) {
      title.classList.remove(CLICKED_CLASS);
    } else {
      title.classList.add(CLICKED_CLASS);
  // click후에도 currentClass는 btn이 되기 때문이다

  /// 두번째 방법 ///
  title.classList.toggle(CLICKED_CLASS);
  /// toggle method를 사용하여 훨씬 편리 ///
}

function init() {
  title.addEventListener("click", handleClick);
  //   title.addEventListener("mouseenter", handleClick);
}
init();

//자바스크립트 파일에 css를 올려놓는것은 그닥 깔끔하지 않으므로
//css파일을 새로이 만들어준다.
