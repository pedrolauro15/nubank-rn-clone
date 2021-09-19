import { DefaultTheme } from "styled-components/native";
import { ThemeTypes } from "../../pages/core/enums/theme-types.enum";

export const ligthTheme: DefaultTheme = {
  colors: {
    primary: "#8A05BE",
    primary100: "#9A3BDA",
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
