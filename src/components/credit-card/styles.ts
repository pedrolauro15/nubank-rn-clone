import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  padding: 24px;
`;

export const Icon = styled(FontAwesome)`
  font-size: 24px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.black};
`;

export const SmallText = styled.Text`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.text_in};
`;