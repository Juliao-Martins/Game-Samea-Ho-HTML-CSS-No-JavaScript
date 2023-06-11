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

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", (e) => {
  canvas = document.getElementById("canvas");
  canvas.width = cols * blockSize;
  canvas.height = rows * blockSize;
  context = canvas.getContext("2d");

  update(); // ! invoke update function here
});

// all thing will load here
// inside function
function update() {
  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);
}
