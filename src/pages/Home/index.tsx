import React from 'react';

import { Main, Wrapper, SideBar, MenuBar } from '../../components';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Home;
