import React from "react";
import { Ammount } from "../account-metrics/styles";
import ComponentHeader from "../component-header";
import { Container, Icon, SmallText } from "./styles";

const CreditCard: React.FC = () => {
  return (
    <Container>
      <Icon name="tablet" />
      <ComponentHeader title="Cartão de crédito" />
      <SmallText style={{ marginTop: 16 }}>Fatura atual</SmallText>
      <Ammount style={{ marginTop: 8 }}>R$ 256,40</Ammount>
      <SmallText>Limite disponível de R$ 2546,49</SmallText>
    </Container>
  );
};

export default CreditCard;
