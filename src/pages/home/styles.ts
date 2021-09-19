import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ContentContainer = styled.View`
  background-color: ${(props) => props.theme.colors.white};
  flex: 1;
`;
