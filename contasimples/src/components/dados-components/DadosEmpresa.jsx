import React from "react";

export default function DadosEmpresa({dadosEmpresa}) {
  return (
    <div className="dados-iniciais">
      {dadosEmpresa &&
        dadosEmpresa.map((dado, idx) => {
          return (
            <div key={idx}>
              <h1>{dado.nomeEmpresa}</h1>
              <ul>
                <li>
                  <span>CNPJ</span>: {dado.cnpj}
                </li>
                <li>
                  <span>Banco</span>: {dado.dadosBancario.banco}
                </li>
                <li>
                  <span>Nome do banco</span>: {dado.dadosBancario.bancoNome}
                </li>
                <li>
                  <span>Agencia</span>: {dado.dadosBancario.agencia}
                </li>
                <li>
                  <span>Conta</span>: {dado.dadosBancario.conta}
                </li>
                <li>
                  <span>Digito da conta</span>: {dado.dadosBancario.digitoConta}
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}
