// src/components/ListaVagas.tsx
import React from 'react';
import Vaga from './Vaga';

const ListaVagas = () => {
  const vagas = [
    {
      titulo: "Desenvolvedor Front-end",
      localizacao: "São Paulo, SP",
      nivel: "Pleno",
      modalidade: "Remoto",
      salarioMin: 6000,
      salarioMax: 10000,
      requisitos: ["React", "TypeScript", "CSS"],
    },
    {
      titulo: "Desenvolvedor Back-end",
      localizacao: "Rio de Janeiro, RJ",
      nivel: "Sênior",
      modalidade: "Híbrido",
      salarioMin: 10000,
      salarioMax: 15000,
      requisitos: ["Node.js", "Express", "MongoDB"],
    },
    // Adicione mais vagas conforme necessário
  ];

  return (
    <ul>
      {vagas.map((vaga, index) => (
        <Vaga key={index} {...vaga} />
      ))}
    </ul>
  );
};

export default ListaVagas;

