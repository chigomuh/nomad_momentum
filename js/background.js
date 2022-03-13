// const images = ["cat_1.jpg", "cat_2.jpg", "cat_3.jpg", "cat_4.jpg"];
// const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.querySelector("body");

bgImage.style.backgroundImage = `url("img/bg.jpg")`;

// const bgImage = document.createElement("img");

// bgImage.id = "bgImg";
// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage); -- body에 제일 마지막 위치
// document.body.insertBefore(bgImage, document.querySelector("script"));