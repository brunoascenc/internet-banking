import React from "react";

export default function DisplayTransacoes({orderBy,filterTransacoes,sorted,}) {
  return (
    <>
      {orderBy === ""
        ? filterTransacoes.map((dado, idx) => {
            return (
              <tr key={idx}>
                <td>{dado.dataTransacao}</td>
                <td>{dado.estabelecimento}</td>
                <td>{dado.descricaoTransacao}</td>
                <td>R$: {dado.valor}</td>
              </tr>
            );
          })
        : sorted.map((dado, idx) => {
            return (
              <tr key={idx}>
                <td>{dado.dataTransacao}</td>
                <td>{dado.estabelecimento}</td>
                <td>{dado.descricaoTransacao}</td>
                <td>R$: {dado.valor}</td>
              </tr>
            );
          })}
    </>
  );
}
