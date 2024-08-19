// src/App.tsx
import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './components/Cabecalho/Cabecalho';
import Hero from './components/Hero/Hero';
import ListaVagas from './components/Vaga/Vaga';
import FormVagas from './components/FormVagas/FormVagas';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <div className="container" id="jobs">
        <FormVagas aoPesquisar={(termo) => console.log(termo)} />
        <ListaVagas />
      </div>
    </>
  );
}

export default App;
