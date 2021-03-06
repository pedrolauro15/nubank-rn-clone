import React from "react";
import AccountMetrics from "../../components/account-metrics";
import ActionList from "../../components/action-list";
import CreditCard from "../../components/credit-card";
import Divider from "../../components/divider";
import Header from "../../components/header";
import MyCards from "../../components/my-cards";
import { ScrollView } from "react-native";
import { ligthTheme } from "../../styles/themes/light";
import { Container, ContentContainer } from "./styles";
import Invest from "../../components/invest";
import Loan from "../../components/loan";
import LifeInsurance from "../../components/life-insurance";

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
          <CreditCard />
          <Divider />
          <Invest />
          <Divider />
          <Loan />
          <Divider />
          <LifeInsurance />
        </ContentContainer>
      </Container>
    </ScrollView>
  );
};

export default Home;
