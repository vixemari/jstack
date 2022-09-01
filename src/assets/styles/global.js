import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  '* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;

  }'

  body {
    backgroundColor: '#f6f5c',
    fonte-size: 16px
  }
  button {
    cursor: pointer;
  }
`;
