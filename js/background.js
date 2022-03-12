const images = ["cat (1).jpg", "cat (2).jpg", "cat (3).jpg", "cat (4).jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage); -- body에 제일 마지막 위치
document.body.insertBefore(bgImage, document.querySelector("script"));