import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#6cfff3",
      100: "#44ffef",
      200: "#1dffec",
      300: "#00f4df",
      400: "#00cdbc",
      500: "#05afa1",
      600: "#099488",
      700: "#0c7970",
      800: "#0d615a",
      900: "#0d4944",
    },
  },
  fontConfig: {
    Inter: {
      100: {
        normal: "inter-light",
        italic: "inter-light",
      },
      200: {
        normal: "inter-light",
        italic: "inter-light",
      },
      300: {
        normal: "inter-light",
        italic: "inter-light",
      },
      400: {
        normal: "inter-light",
        italic: "inter-light",
      },
      500: {
        normal: "inter-light",
        italic: "inter-light",
      },
      600: {
        normal: "inter-light",
        italic: "inter-light",
      },
      700: {
        normal: "inter-semibold",
        italic: "inter-semibold",
      },
      800: {
        normal: "inter-semibold",
        italic: "inter-semibold",
      },
      900: {
        normal: "inter-semibold",
        italic: "inter-semibold",
      },
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
    mono: "Inter",
  },
});
