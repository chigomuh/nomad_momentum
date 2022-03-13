const clock = document.querySelector("h2#clock");
const clockHour = document.querySelector("#hour");
const clockMin = document.querySelector("#minute");
const clockSec = document.querySelector("#second");

// padStart(length, text), padEnd(length, text)
function addZero(num) {
  const str = String(num);
  if (str.length === 1) {
    return `0${str}`;
  } else {
    return str;
  }
}

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerText = `${addZero(hours)}:${addZero(minutes)}`;

  clockHour.style.transform = `translate(-50%, -50%) rotate(${
    (hours - 21) * 30
  }deg)`;
  clockMin.style.transform = `translate(-50%, -50%) rotate(${
    (minutes + 15) * 6
  }deg)`;
  clockSec.style.transform = `translate(-50%, -50%) rotate(${
    (seconds + 15) * 6
  }deg)`;
}

getClock();
setInterval(getClock, 1000);
