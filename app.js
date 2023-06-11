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

// snake
let snakeX = cols * 5,
  snakeY = cols * 10,
  velocityX = 0,
  velocityY = 0;

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", (e) => {
  canvas = document.getElementById("canvas");
  canvas.width = cols * blockSize;
  canvas.height = rows * blockSize;
  context = canvas.getContext("2d");

  setInterval(update, 1000 / 10); // ! invoke update function here
  // handled keyboard event to snake
  // with invoke changeDirection function
  window.addEventListener("keyup", changeDirection);
});

// all thing will load here
// inside function
function update() {
  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // snake game
  context.fillStyle = "#0f0";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
}

// declare changeDirection function
function changeDirection(e) {
  if (e.code === "ArrowUp" && velocityY !== 1) {
    textConsole({
      caption: "Leten",
      background: "red",
      foreground: "#333",
      fontFamily: "Fira Code",
    });
    velocityX = 0;
    velocityY = -1;
  } else if (e.code === "ArrowRight" && velocityX !== -1) {
    textConsole({
      caption: "Loos",
      background: "lightskyblue",
      foreground: "#000",
      fontFamily: "Times New Roman",
    });
    velocityX = 1;
    velocityY = 0;
  } else if (e.code === "ArrowDown" && velocityY !== -1) {
    textConsole({
      caption: "Kraik",
      background: "orange",
      foreground: "whitesmoke",
      fontFamily: "Lucida Hand writing",
    });
    velocityX = 0;
    velocityY = 1;
  } else if (e.code === "ArrowLeft" && velocityX !== 1) {
    textConsole({
      caption: "karuk",
      background: "chocolate",
      foreground: "#333",
      fontFamily: "Poppins",
    });
    velocityX = -1;
    velocityY = 0;
  }
}
