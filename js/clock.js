const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const second = date.getSeconds();

  clock.innerText = `${addZero(hours)}:${addZero(minutes)}:${addZero(second)}`;
}

// padStart(length, text), padEnd(length, text)
function addZero(num) {
  const str = String(num);
  if (str.length === 1) {
    return `0${str}`;
  } else {
    return str;
  }
}

getClock();
setInterval(getClock, 1000);
