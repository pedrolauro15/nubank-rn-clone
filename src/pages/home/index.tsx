import React from 'react';
import AccountMetrics from '../../components/account-metrics';
import ActionList from '../../components/action-list';
import Header from '../../components/header';
import MyCards from '../../components/my-cards';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <AccountMetrics />
      <ActionList />
      <MyCards />
    </Container>
  );
};

export default Home;