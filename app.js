// 블록 범위의 상수, 재할당 X 재선언 X;
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const reset = document.getElementById("jsReset");
const jscanvas = document.getElementById("jsCanvas");
const save = document.getElementById("jsSave");
const eraser = document.getElementById("jsEraser");
const cvsize = document.getElementById("jsSize");
const INITIAL_COLOR = "black";

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.fillStyle = "white";
ctx.strokeStyle = INITIAL_COLOR;

ctx.lineWidth = 2.5;

// let 은 고정된 변수, 블록 내에서 변수가 재할당되지만, 블록 밖에선 다시 초기화
let painting = false;
let filling = false;
let is_eraser = false;

function stopPainting() {
  painting = false;
}

function startPainting(event) {
  if (event.which == 1) {
    if (filling) {
      painting = false;
    } else {
      painting = true;
    }
  }
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseEnter(event) {
  x = event.offsetX;
  y = event.offsetY;
  ctx.moveTo(x, y);
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  if (is_eraser) {
    handleEraserClick();
  }
  if (filling) {
    ctx.fillStyle = color;
  } else {
    ctx.strokeStyle = color;
  }
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick(event) {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleReset(event) {
  resetColor = window.getComputedStyle(jscanvas).backgroundColor;
  ctx.fillStyle = resetColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function handleCM(event) {
  event.preventDefault();
}

function handleSaveClick(event) {
  // 1. get canvas data -> image
  const image = canvas.toDataURL("image/png");
  // 2. make link
  const link = document.createElement("a");
  const name = prompt("어떤 멋진 이름으로 저장?", "SEXY_PAINT[😎]");
  if (name != null) {
    link.href = image;
    link.download = name;
    link.click();
  }
}

function handleEraserClick() {
  if (!is_eraser) {
    is_eraser = true;
    ctx.strokeStyle = ctx.fillStyle;
    document.getElementById("jsEraser").style.backgroundImage =
      "url('image/eraser_down.png')";
  } else {
    is_eraser = false;
    document.getElementById("jsEraser").style.backgroundImage =
      "url('image/eraser_up.png')";
  }
}

function handleSizeChange(event) {
  const cvSize = event.target.value;
  canvas.style.width = cvSize + "px";
  canvas.style.height = cvSize + "px";
  canvas.width = cvSize;
  canvas.height = cvSize;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseenter", onMouseEnter);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

//console.log(document.getElementById("jsColors"));
Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (reset) {
  reset.addEventListener("click", handleReset);
}

if (save) {
  save.addEventListener("click", handleSaveClick);
}

if (eraser) {
  eraser.addEventListener("click", handleEraserClick);
}

if (cvsize) {
  cvsize.addEventListener("input", handleSizeChange);
}
