import React from 'react';

import GlobalStyle from './styles/global';

import Home from './pages/Home';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
};

export default App;
