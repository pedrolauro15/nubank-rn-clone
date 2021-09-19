import React from "react";
import { ScrollView } from "react-native";
import AccountMetrics from "../../components/account-metrics";
import ActionList from "../../components/action-list";
import Divider from "../../components/divider";
import Header from "../../components/header";
import MyCards from "../../components/my-cards";
import { ligthTheme } from "../../styles/themes/light";
import { Container, ContentContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ backgroundColor: ligthTheme.colors.primary }}
    >
      <Container>
        <Header />
        <ContentContainer>
          <AccountMetrics />
          <ActionList />
          <MyCards />
          <Divider />
        </ContentContainer>
      </Container>
    </ScrollView>
  );
};

export default Home;
