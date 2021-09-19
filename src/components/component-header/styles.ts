import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.black};
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.medium};
`;

export const ArrowIcon = styled(Feather)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text_in};
`;
