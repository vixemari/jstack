import React from 'react';
import PropTypes from 'prop-types';
import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import Input from '../input';
import Select from '../select';
import Button from '../button';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Email" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Contato" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="0">Selecione o tipo de contato</option>
          <option value="1">Pessoal</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
