const numStyle = document.querySelector(".num-style");

for (let i = 0; i < 6; i++) {
  if (!(i === 0 || i === 3)) {
    const line = document.createElement("div");
    line.classList.add("line");
    line.style.transform = `translate(-50%, -50%) rotate(${30 * i}deg)`;
    numStyle.appendChild(line);
  }
}

let left = 9;
let right = 3;

for (let i = 0; i < 6; i++) {
  if (i === 0 || i === 3) {
    const numContainer = document.createElement("div");
    numContainer.classList.add("num-container");
    numContainer.style.transform = `translate(-50%, -50%) rotate(${30 * i}deg)`;
    numContainer.innerHTML = `
    <div class="num" style="transform: rotate(${-(30 * i)}deg);">${
      left + i > 12 ? left + i - 12 : left + i
    }</div>
    <div class="num" style="transform: rotate(${-(30 * i)}deg);">${
      right + i
    }</div>
    `;
    numStyle.appendChild(numContainer);
  }
}
