import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import "../App.css";
import DadosEmpresa from "./dados-components/DadosEmpresa";
import DadosGrafico from "./dados-components/DadosGrafico";
import { Link } from "react-router-dom";

export default function Dados() {
  const value = useContext(DataContext);
  const [dados] = value.dados;
  const [transacoes] = value.transacoes;
  const filterEmpresa = dados.filter((emp) => emp.empresaId === 1);
  const filterTransacoes = transacoes.filter((emp) => emp.empresaId === 1);
  filterTransacoes.length = 4;

  return (
    <div className="dados">
      <div className="dados-empresa">
        <DadosEmpresa dadosEmpresa={filterEmpresa} />
        <div className="extrato">
          <div>
            <h3>Extrato</h3>
            <Link to="/extrato">
              <span className="extrato-link">Ver extrato completo</span>
            </Link>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Estabelecimento</th>
                <th>Tipo</th>
                <th>Valor</th>
              </tr>
              {filterTransacoes &&
                filterTransacoes.map((dado, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{dado.estabelecimento}</td>
                      <td>{dado.descricaoTransacao}</td>
                      <td>R$: {dado.valor}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <DadosGrafico />
    </div>
  );
}
