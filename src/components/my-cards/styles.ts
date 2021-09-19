import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { mediaquery } from "../../styles/mediaquery";

export const Container = styled.View`
  padding: 16px 24px;
`;

export const CardButton = styled(RectButton)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.light_gray};
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(FontAwesome)`
  margin-right: 16px;
  font-size: ${mediaquery(24)}px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.medium};
`;
