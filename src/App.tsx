import React from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Layout />
      <GlobalStyle />
    </>
  );
};

export default App;
