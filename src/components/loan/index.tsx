import React from "react";
import ComponentHeader from "../component-header";
import { Icon, SmallText } from "../credit-card/styles";
import { Container } from "./styles";

const Loan: React.FC = () => {
  return (
    <Container>
      <Icon name="yelp" />
      <ComponentHeader title="Empréstimo" />
      <SmallText>Seu empréstimo está em dias</SmallText>
    </Container>
  );
};

export default Loan;
