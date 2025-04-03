// src/styles/colors.ts
const Colors = {
  primary: "#3D0B74",
  accent: "#15FF00",
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
  orangeDark: "#FBBC05",

  gradient: {
    // Coordinates for top-left to bottom-right
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    colors: ["#88C8DF", "#6FB6CF", "#228BB0"] as [string, string, ...string[]],
  },
};

export default Colors;
