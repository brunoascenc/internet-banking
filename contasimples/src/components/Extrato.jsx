import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import Menu from "./Menu";
import "../App.css";
import Filter from "./extrato-components/useFilter";
import TransacaoSelect from "./extrato-components/TransacaoSelect";
import DisplayTransacoes from "./extrato-components/DisplayTransacoes";

export default function Extrato() {
  const value = useContext(DataContext);
  const [transacoes] = value.transacoes;
  const filterTransacoes = transacoes.filter((emp) => emp.empresaId === 1);
  //Passando dados para o filter
  const [sorted, handleOrderBy, orderBy] = Filter(filterTransacoes);

  return (
    <div className="home-container">
      <Menu />
      <div className="extrato extrato-detalhe">
        <div>
          <h1>Extrato</h1>
        </div>
        <TransacaoSelect handleChange={handleOrderBy} />
        <table>
          <tbody>
            <tr>
              <th>Data</th>
              <th>Estabelecimento</th>
              <th>Tipo</th>
              <th>Valor</th>
            </tr>
            <DisplayTransacoes
              orderBy={orderBy}
              filterTransacoes={filterTransacoes}
              sorted={sorted}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
