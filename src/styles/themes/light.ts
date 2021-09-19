import { DefaultTheme } from "styled-components/native";
import { ThemeTypes } from "../../pages/core/enums/theme-types.enum";

export const ligthTheme: DefaultTheme = {
  colors: {
    primary: "#BC4EE8",
    primary100: "#BC4EE8",
    black: "#000000",
    white: "#FFFFFF",
    light_gray: "#F0F1F5",
    text_in: "#737583",
  },
  metrics: {},
  fonts: {
    ligth: "ligth",
    medium: "medium",
    bold: "bold",
    regular: "regular",
  },
  title: ThemeTypes.LIGTH,
};
