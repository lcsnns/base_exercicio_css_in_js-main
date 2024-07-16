// src/GlobalStyle.tsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --cor-principal: #0044ff;
    --cor-secundaria: #000000;
    --cor-secundaria-hover: #333333; /* Adicione esta linha se ainda não estiver lá */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 80%;
    }
  }
`;

export default GlobalStyle;