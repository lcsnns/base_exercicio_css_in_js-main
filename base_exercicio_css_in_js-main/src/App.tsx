// src/App.tsx
import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './components/Cabecalho';
import Hero from './components/Hero';
import ListaVagas from './containers/ListaVagas';
import FormVagas from './components/FormVagas';
import Vaga from './components/Vaga'; // Adicione a importação

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <div className="container">
        <FormVagas aoPesquisar={(termo) => console.log(termo)} />
        <ListaVagas />
        {/* Adicione um exemplo de Vaga */}
        <Vaga
          titulo="Desenvolvedor Front-end"
          localizacao="São Paulo, SP"
          nivel="Pleno"
          modalidade="Presencial"
          salarioMin={5000}
          salarioMax={8000}
          requisitos={['React', 'JavaScript', 'CSS']}
        />
      </div>
    </>
  );
}

export default App;