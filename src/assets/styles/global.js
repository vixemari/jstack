import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;

  }

  body {
    background: ${({ theme }) => theme.colors.background};
    margin:  20px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.grey[900]}
  }
  button {
    cursor: pointer;
  }
`;
