import React from 'react';
import { Container, CardButton, Icon, Text } from "./styles";

const MyCards: React.FC = () => {
  return (
    <Container>
      <CardButton>
        <Icon name="tablet" />
        <Text>Meus cartões</Text>
      </CardButton>
    </Container>
  );
}

export default MyCards;