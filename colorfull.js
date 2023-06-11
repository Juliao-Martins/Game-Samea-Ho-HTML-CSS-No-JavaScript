function textConsole({
  caption,
  background,
  foreground,
  fontSize,
  fontFamily,
  style,
}) {
  console.log(
    `%c ${caption}`,
    `background-color: ${background}; color: ${foreground}; font: ${fontSize} ${fontFamily}; font-style: ${style};`
  );
}

function snakeEatConsole() {
  textConsole({
    caption: "🐍: 🍎 Yummi",
    background: "black",
    color: "khaki",
    fontFamily: "Fira Code Regular",
    fontSize: "3em",
  });
}

export { textConsole, snakeEatConsole };
