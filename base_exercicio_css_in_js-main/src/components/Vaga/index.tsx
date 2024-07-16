// src/components/Vaga.tsx
import React from 'react';
import styled from 'styled-components';

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Vaga = (props: Props) => (
  <VagaItem>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <VagaDetalhes>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de Contratação: {props.modalidade}</li>
      <li>Salário: {props.salarioMin.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} - {props.salarioMax.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </VagaDetalhes>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaItem>
);

const VagaItem = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  list-style-type: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f9f9f9;
  }
`;

const VagaTitulo = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: var(--cor-principal);
  font-family: 'Gloock', serif;
`;

const VagaDetalhes = styled.ul`
  font-family: 'Lato', sans-serif;
  color: #666;
  margin-bottom: 12px;
  padding-left: 0;

  li {
    margin-bottom: 8px;
  }
`;

const VagaLink = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-decoration: none;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  cursor: pointer;

  &:hover {
    background-color: var(--cor-secundaria-hover);
  }
`;

export default Vaga;
