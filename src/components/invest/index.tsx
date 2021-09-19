import React from "react";
import ComponentHeader from "../component-header";
import { Icon, SmallText } from "../credit-card/styles";
import { Container } from "./styles";

const Invest: React.FC = () => {
  return (
    <Container>
      <Icon name="signal" />
      <ComponentHeader title="Nu invest" />
      <SmallText>
        Continue seu cadastro para abrir sua conta na corretora
      </SmallText>
    </Container>
  );
};

export default Invest;
