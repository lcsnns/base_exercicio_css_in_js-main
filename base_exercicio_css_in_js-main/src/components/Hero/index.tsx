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
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2em;
`;

const Hero = () => (
  <HeroSection>
    <HeroContent>
      <HeroTitle>Bem-vindo ao EBAC Jobs</HeroTitle>
      <HeroSubtitle>Encontre as melhores vagas aqui</HeroSubtitle>
    </HeroContent>
  </HeroSection>
);

export default Hero;
