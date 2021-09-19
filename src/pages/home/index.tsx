import React from 'react';
import AccountMetrics from '../../components/account-metrics';
import Header from '../../components/header';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <AccountMetrics />
    </Container>
  );
};

export default Home;