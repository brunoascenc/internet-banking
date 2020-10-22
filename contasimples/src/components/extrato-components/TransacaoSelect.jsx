import React from "react";
import "../../App.css";

export default function TransacaoSelect({handleChange}) {
  
  return (
    <div className="filter">
      <span>Tipo de transação:</span>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="">Selecione</option>
        <option value="CARD">Cartão de crédito</option>
        <option value="SLIP_IN">Pagamento por boleto</option>
        <option value="PAY">Deposito por boleto</option>
        <option value="TED_IN">Transferência Bancária</option>
      </select>
    </div>
  );
}
