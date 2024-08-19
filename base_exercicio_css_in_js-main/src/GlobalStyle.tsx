import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --cor-principal: #0044ff;
    --cor-secundaria: #000000;
    --cor-secundaria-hover: #333333; /* Adicione esta linha se ainda não estiver lá */
    --cor-background: #f5f5f5; /* Cor de fundo padrão */
    --cor-texto: #333333; /* Cor do texto padrão */
    --cor-borda: #ddd; /* Cor da borda padrão */
    --cor-link: #0044ff; /* Cor do link padrão */
    --cor-link-hover: #0022aa; /* Cor do link ao passar o mouse */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    list-style: none;
  }

  body {
    background-color: var(--cor-background);
    color: var(--cor-texto);
    padding-bottom: 120px;
    line-height: 1.6;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }

  a {
    color: var(--cor-link);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--cor-link-hover);
    }
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 80%;
    }
  }
`;

export default GlobalStyle;
