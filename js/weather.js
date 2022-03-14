function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      const weatherIconUrl = `img/weather/${data.weather[0].main}.png`
      weather.style.backgroundImage = `url('${weatherIconUrl}')`;
      // weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  const weatherError = document.querySelector("#weather span:first-child");
  weatherError.innerText = "위치 확인 실패😥";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
