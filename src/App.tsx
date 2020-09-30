import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Layout from './components/Layout';

const App: React.FC = () => (
  <>
    {/* <BrowserRouter>
      <Routes />
    </BrowserRouter> */}
    <Layout />
    <GlobalStyle />
  </>
);

export default App;
