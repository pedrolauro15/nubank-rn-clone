import React from 'react';
import AccountMetrics from '../../components/account-metrics';
import ActionList from '../../components/action-list';
import Header from '../../components/header';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <AccountMetrics />
      <ActionList />
    </Container>
  );
};

export default Home;