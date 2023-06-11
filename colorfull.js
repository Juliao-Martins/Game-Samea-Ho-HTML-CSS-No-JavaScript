export default function textConsole({
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
