import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import Header from '../header';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
