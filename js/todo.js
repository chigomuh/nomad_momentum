const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoLists = document.getElementById("todo-list");
const btnSm = document.querySelector("#submit");
const btnDel = document.querySelector("#delete");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function isDoneToDo(event) {
  const li = event.target.parentElement;
  function isDone(item) {
    if (!item.isDone) {
      li.style.textDecoration = "line-through";
      li.style.opacity = "0.3";
      item.isDone = true;
    } else {
      li.style.textDecoration = "none";
      li.style.opacity = "1";
      item.isDone = false;
    }
  }
  toDos.forEach((item) =>
    li.id == item.id ? isDone(item) : null
  );
  saveToDos();
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li);
  // li.remove();
  // toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.classList.add("li-list");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const btn = document.createElement("button");
  btn.style.display = "none";
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoLists.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  if (newToDo !== "") {
    toDoInput.value = "";
    const newToDoObj = {
      text: newToDo,
      id: Date.now(),
      isDone: false,
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
    check();
  }
}

const getToDos = localStorage.getItem(TODOS_KEY);

if (getToDos !== null) {
  const parsedToDos = JSON.parse(getToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function check() {
  const toDoListAll = document.querySelectorAll(".li-list");
  for (let i = 0; i < toDoListAll.length; i++) {
    toDoListAll[i].addEventListener("click", isDoneToDo);
    toDoListAll[i].addEventListener("mouseenter", handleMouseEnter);
  }
}

function handleMouseEnter(event) {
  // document.querySelector(String(event.target.id)).style.cursor = "pointer";
  const getId = String(event.target.id);
  const target = document.getElementById(getId);
  target.style.cursor = "pointer";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
btnSm.addEventListener("click", handleToDoSubmit);
btnSm.addEventListener("mouseenter", handleMouseEnter);
btnDel.addEventListener("click", deleteToDo);
btnDel.addEventListener("mouseenter", handleMouseEnter);

check();
