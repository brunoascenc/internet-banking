import React from "react";

export default function Dados() {
  return (
    <div className="dados">
      <div className="dados-empresa">
        <h1>Nome Empresa</h1>
        <ul>
            <li><span>CNPJ</span>: 123456789</li>
            <li><span>Banco</span>: 999</li>
            <li><span>Nome do banco</span>: Conta Simples</li>
            <li><span>Agencia</span>: 1</li>
            <li><span>Conta</span>: 123456</li>
            <li><span>Digito da conta</span>: 1</li>
        </ul>

        <div className="extrato">
          <div>
          <h3>Extrato</h3>
          <a href="/#">Ver extrato completo</a>
          </div>
          <ul>
            <li><span>CNPJ</span>: 123456789</li>
            <li><span>Banco</span>: 999</li>
            <li><span>Nome do banco</span>: Conta Simples</li>
        </ul>
      </div>
      </div>
      <div className="grafico">
          <h1>Grafico</h1>
      </div>
    </div>
  );
}
