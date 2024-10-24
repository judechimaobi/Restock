const COLORS = {
  primary: "#00A57A",
  secondary: "#015E3F",
  lightPrimary: '#c8f3e6',

  error: "#E01D1D",
  success: "#00A57A",
  alert: "#ffa627",

  gray: "#888888",
  grayDark: "#333333",
  black: "#000000",

  white: "#ffffff",
  lightWhite: "#f8f8f8",
  darkWhite: "#eeeeee"
};

const FONT = {
  extraLight: "Nexa-extralight",
  light: "Nexa-light",
  regular: "Nexa-regular",
  bold: "Nexa-bold",
  heavy: "Nexa-heavy",
};

const SIZES = {
  xSmall: 12,
  small: 14,
  medium: 18,
  large: 24,
  xLarge: 30,
  xxLarge: 40,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
