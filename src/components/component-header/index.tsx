import React from "react";
import { Container, ArrowIcon, Title } from "./styles";

interface Props {
  title: string;
}

const ComponentHeader: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ArrowIcon name="chevron-right" />
    </Container>
  );
};

export default ComponentHeader;
