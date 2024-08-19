import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 40px;
  margin-left: 20px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;

  a {
    color: var(--cor-principal);
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 700;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: var(--cor-principal);
      color: var(--cor-secundaria);
    }
  }
`;

const Titulo = styled.h1`
  font-family: 'Gloock', serif;
  font-size: 2.5em;
  margin: 0;
  flex: 1;
  text-align: center;
`;

const Cabecalho = () => (
  <Header>
    <Logo src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Logo EBAC Jobs" />
    <Titulo>EBAC Jobs</Titulo>
    <Nav>
      <a href="#home">Home</a>
      <a href="#about">Sobre</a>
      <a href="#jobs">Vagas</a>
      <a href="#contact">Contato</a>
    </Nav>
  </Header>
);

export default Cabecalho;
