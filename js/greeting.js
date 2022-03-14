// const = 재선언 X, 재할당 X 절대 안변함, Default로 사용
// let = 재선언 X, 재할당 O 업데이트 가능, 필요 시 사용
// var = 재선언 O, 재할당 O 오래된 변수 선언 방식, 쓰지 말 것
// // 비디오게임 개발
// // 플레이어(이름, 점수, 특성, ...);
// const player = {
//     //property
//     name: "kqq",
//     point: 100,
//     fat: true
// };
// console.log(player);
// console.log(player.name);
// player.fat = false;
// console.log(player.fat);
// player.lastName = "potato";
// console.log(player);
// prompt 오래된 input 방식
// document(object) javascript 변경 가능
// html -> javastript -> html
// const loginForm = document.getElementById("login-form");
// const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const toDoFormHide = document.querySelector("#todo-form");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings();
}

function paintGreetings() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `안녕, ${userName} !`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDoFormHide.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  toDoFormHide.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
