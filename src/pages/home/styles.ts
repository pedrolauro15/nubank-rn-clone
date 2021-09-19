import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ContentContainer = styled.View`
  background-color: ${(props) => props.theme.colors.white};
  flex: 1;
  padding-bottom: ${Constants.statusBarHeight}px;
`;
