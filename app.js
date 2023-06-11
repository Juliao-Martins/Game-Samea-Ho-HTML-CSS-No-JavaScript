import textConsole from "./colorfull.js";

// textConsole({
//   caption: "Hello, World!",
//   background: "Khaki",
//   foreground: "black",
//   fontFamily: "Fira Code",
//   fontSize: "3em",
//   style: "normal",
// });

// ! initial all here

// canvas
let canvas = "",
  context = "",
  cols = 20,
  rows = 20,
  blockSize = 25;

// food
let foodX = 0,
  foodY = 0;

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", (e) => {
  canvas = document.getElementById("canvas");
  canvas.width = cols * blockSize;
  canvas.height = rows * blockSize;
  context = canvas.getContext("2d");

  placeFood(); // ! invoke placeFood function here before update
  update(); // ! invoke update function here
});

// all thing will load here
// inside function
function update() {
  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // draw a food
  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);
}

function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}
