import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import { mediaquery } from "../../styles/mediaquery";

const ITEM_WIDTH = mediaquery(80);

export const Container = styled.View`
  margin-top: 16px;
`;

export const Item = styled.View`
  width: ${ITEM_WIDTH}px;
  align-items: center;
`;

export const ItemText = styled.Text`
  margin-top: 14px;
  font-size: ${mediaquery(16)}px;
  font-family: ${(props) => props.theme.fonts.medium};
  text-align: center;
`;

export const Icon = styled(FontAwesome)`
  font-size: ${mediaquery(20)}px;
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
