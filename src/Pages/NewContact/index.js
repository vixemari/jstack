import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';
import Select from '../../components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />
      <Input
        type="text"
        placeholder="Nome"
      />
      <Select>
        <option value="0">Instagram</option>
        <option value="1">Facebook</option>
        <option value="2">Twitter</option>
      </Select>

    </>
  );
}
