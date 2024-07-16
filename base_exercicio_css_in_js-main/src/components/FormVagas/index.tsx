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
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  font-family: 'Lato', sans-serif;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Lato', sans-serif;

  &:hover {
    background-color: var(--cor-secundaria-hover);
  }
`;

export default FormVagas;
