// src/components/FormVagas.tsx
import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

type Props = {
  aoPesquisar: (termo: string) => void;
};

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLowerCase());
  };

  return (
    <Form onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Button type="submit">Pesquisar</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-family: 'Lato', sans-serif;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  margin-bottom: 40px;
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  font-family: 'Lato', sans-serif;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--cor-principal);
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: var(--cor-secundaria-hover);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default FormVagas;