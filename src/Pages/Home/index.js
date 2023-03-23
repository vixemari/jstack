import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar Contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Matheus Silva</strong>
            <small>instagram</small>
          </div>
          <span>mariana@test.com</span>
          <span>(79)99999-9999</span>
        </div>
        <div className="actions">
          <Link to="/edit/123">
            <img src={edit} alt="Edit" />
          </Link>
          <Link to="/delete/123">
            <img src={trash} alt="Delete" />
          </Link>
        </div>
      </Card>
    </Container>
  );
}
