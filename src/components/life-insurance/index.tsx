import React from "react";
import ComponentHeader from "../component-header";
import { Icon, SmallText } from "../credit-card/styles";
import { Container } from "./styles";

const LifeInsurance: React.FC = () => {
  return (
    <Container>
      <Icon name="heart-o" />
      <ComponentHeader title="Seguro de vida" />
      <SmallText>
        Conheça o Nubank vida: um seguro simples que cabe no bolso
      </SmallText>
    </Container>
  );
};

export default LifeInsurance;
