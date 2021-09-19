import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

const ITEM_WIDTH = 70;

export const Container = styled.View`
  margin-top: 16px;
`;

export const Item = styled.View`
  width: ${ITEM_WIDTH}px;
  align-items: center;
`;

export const ItemText = styled.Text`
  margin-top: 14px;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.medium};
`;

export const Icon = styled(FontAwesome)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
`;

export const IconButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: ${ITEM_WIDTH}px;
  height: ${ITEM_WIDTH}px;
  border-radius: ${ITEM_WIDTH / 2}px;
  background-color: ${(props) => props.theme.colors.light_gray};
`;

export const ItemSeparator = styled.View`
  width: 16px;
`;
