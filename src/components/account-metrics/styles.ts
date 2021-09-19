import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  padding: 24px 24px 20px 24px;
  width: 100%;
`;

export const Ammount = styled.Text`
  color: ${(props) => props.theme.colors.black};
  font-size: 32px;
  font-family: ${(props) => props.theme.fonts.medium};
  margin-top: 20px;
`;
