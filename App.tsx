import React from "react";
import Home from "./src/pages/home";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";
import { ligthTheme } from "./src/styles/themes/light";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    ligth: Roboto_300Light,
    regular: Roboto_400Regular,
    medium: Roboto_500Medium,
    bold: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={ligthTheme}>
      <StatusBar
        backgroundColor={ligthTheme.colors.primary}
        style="inverted"
        hidden={false}
      />
      <AppContainer>
        <Home />
      </AppContainer>
    </ThemeProvider>
  );
};

const AppContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
`;

export default App;
