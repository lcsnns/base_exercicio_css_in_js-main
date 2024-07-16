// src/components/Cabecalho.tsx
import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Titulo = styled.h1`
  font-family: 'Gloock', serif;
  font-size: 2.5em;
  margin: 0;
`;

const Cabecalho = () => (
  <Header>
    <Titulo>EBAC Jobs</Titulo>
  </Header>
);

export default Cabecalho;
