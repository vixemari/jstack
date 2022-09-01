import React from 'react';
import { Container, InputSearchContainer } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201px" />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar Contato..." />
      </InputSearchContainer>
    </Container>
  );
}
