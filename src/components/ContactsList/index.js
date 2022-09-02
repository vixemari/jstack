import React from 'react';
import {
  Container, Header, ListContainer, Card,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo Contato</a>
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
          <a href="/">
            <img src={edit} alt="Edit" />
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </a>
        </div>
      </Card>
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
          <a href="/">
            <img src={edit} alt="Edit" />
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </a>
        </div>
      </Card>

    </Container>
  );
}
