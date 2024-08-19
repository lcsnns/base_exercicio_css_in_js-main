// src/components/Hero.tsx
import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background: url('path/to/your/image.jpg') no-repeat center center/cover;
  color: white;
  position: relative;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5); // Adiciona um overlay escuro para melhor contraste
  }
`;

const HeroContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  font-family: 'Gloock', serif;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 30px;
  font-family: 'Lato', sans-serif;
`;

const HeroButton = styled.a`
  padding: 12px 24px;
  background-color: var(--cor-principal);
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--cor-secundaria);
  }
`;

const Hero = () => (
  <HeroSection id="home">
    <HeroContent>
      <HeroTitle>Bem-vindo ao EBAC Jobs</HeroTitle>
      <HeroSubtitle>Encontre as melhores vagas aqui</HeroSubtitle>
      <HeroButton href="#jobs">Ver Vagas</HeroButton>
    </HeroContent>
  </HeroSection>
);

export default Hero;
