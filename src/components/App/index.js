import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import Header from '../Header';
import { Container } from '../../Pages/Home/styles';
import Routes from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
