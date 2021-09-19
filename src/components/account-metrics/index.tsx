import React from 'react';
import ComponentHeader from '../component-header';
import { Container, Ammount } from './styles';

const AccountMetrics: React.FC = () => {
  return (
    <Container>
      <ComponentHeader title="Conta" />
      <Ammount>R$ 98227,32</Ammount>
    </Container>
  );
}

export default AccountMetrics;