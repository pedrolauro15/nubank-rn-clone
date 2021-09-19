import { Dimensions } from "react-native";

export const mediaquery = (size: number) => {
  const { height, width } = Dimensions.get("screen");
  const ratio = height / width;
  return ((size / ratio) * height) / 500;
};
