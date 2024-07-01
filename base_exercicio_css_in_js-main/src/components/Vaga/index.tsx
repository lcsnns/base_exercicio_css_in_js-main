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
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
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
`;

const VagaTitulo = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #333;
  font-family: 'Lato', sans-serif;
`;

const VagaLink = styled.a`
  display: inline-block;
  margin-top: 12px;
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

