import React from 'react';
import { Container, MetricsHeader, MetricsTitle, ArrowIcon, Ammount } from './styles';

const AccountMetrics: React.FC = () => {
  return (
    <Container>
      <MetricsHeader>
        <MetricsTitle>Conta</MetricsTitle>
        <ArrowIcon name="chevron-right"/>
      </MetricsHeader>
      <Ammount>R$ 98227,32</Ammount>
    </Container>
  );
}

export default AccountMetrics;