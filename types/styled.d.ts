import "styled-components";
import { ThemeTypes } from "../src/pages/core/enums/theme-types.enum";

declare module "styled-components" {
  export interface DefaultTheme {
    title: ThemeTypes;
    colors: {
      primary: string;
      primary100: string;
      white: string;
      black: string;
      light_gray: string;
      text_in: string;
    };
    fonts: {
      ligth: string;
      medium: string;
      regular: string;
      bold: string;
    };
    metrics: {};
  }
}
