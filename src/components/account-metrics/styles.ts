import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  padding: 24px 24px 20px 24px;
  width: 100%;
`;

export const MetricsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MetricsTitle = styled.Text`
  color: ${(props) => props.theme.colors.black};
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.medium};
`;

export const ArrowIcon = styled(Feather)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text_in};
`;

export const Ammount = styled.Text`
  color: ${(props) => props.theme.colors.black};
  font-size: 32px;
  font-family: ${(props) => props.theme.fonts.medium};
  margin-top: 20px;
`;
