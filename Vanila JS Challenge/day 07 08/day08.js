const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];
let checktoDos = [];
/////////////////////////////////////////////////////////
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
/////////////////////////////////////////////////////////.
function checkToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList2.appendChild(li);

  //   const cleanToDos = toDos.filter(function (toDo) {
  //     return toDo.id !== parseInt(li.id);
  //   });
  //   toDos = cleanToDos;

  delBtn.addEventListener("click", deleteToDo);
  const span2 = document.createElement("span");
  const newId2 = toDos.length + 1;
  span2.innerText = text;
  li.id = newId2;
  const toDoObj2 = {
    text: text,
    id: newId2,
  };
  checktoDos.push(toDoObj2);
  saveToDos();
}
//////////////////////////////////////////////////////////
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//////////////////////////////////////////////////////////
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");

  delBtn.addEventListener("click", deleteToDo);
  checkBtn.addEventListener("click", checkToDo);
  delBtn.innerText = "❌";
  checkBtn.innerText = "✅";

  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  toDoList.appendChild(li);

  li.id = newId;
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}
///////////////////////////////////////////////////////////
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
///////////////////////////////////////////////////////////
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}
////////////////////////////////////////////////////////////
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
////////////////////////

const toDoList2 = document.querySelector(".js-toDoList2");
