import React, { useContext, useState } from "react";
import { DataContext } from "../data/DataProvider";
import Menu from "./Menu";
import "../App.css";

export default function Cartoes() {
  const value = useContext(DataContext);
  const [transacoes] = value.transacoes;
  const filterTransacoes = transacoes.filter((emp) => emp.empresaId === 1);

  //Limitar dados a serem mostrados
  const [visible, setVisible] = useState(5);
  filterTransacoes.length = visible;
  const handleClick = () => {
    setVisible((prev) => prev + 5);
  };

  return (
    <div className="home-container">
      <Menu />
      <div className="cartoes-empresa">
        <h1>Transações no Cartão</h1>
        <div className="header">
          <span>Valor</span>
          <span>Final do Cartão</span>
        </div>
        {filterTransacoes &&
          filterTransacoes.map((dado, idx) => {
            return (
              <div key={idx} className="cartoes">
                <h4>R$: {dado.valor}</h4>
                <span>**** {dado.finalCartao}</span>
              </div>
            );
          })}
        <button type="button" onClick={handleClick}>
          Veja mais
        </button>
      </div>
    </div>
  );
}
