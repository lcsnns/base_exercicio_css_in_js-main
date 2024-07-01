import styled from 'styled-components';

const Hero = () => (
  <Form>
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </Form>
);

const Form = styled.form`
  /* Adicione seus estilos aqui */
  background-color: #f8f9fa; /* exemplo de cor de fundo */
  padding: 20px;
`;

const Container = styled.div`
  /* Adicione seus estilos aqui */
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroTitle = styled.h2`
  /* Adicione seus estilos aqui */
  font-size: 2rem;
  text-align: center;
  color: #333; /* exemplo de cor de texto */
  font-family: 'Gloock', serif; /* usando a fonte importada no index.html */
`;

export default Hero;

