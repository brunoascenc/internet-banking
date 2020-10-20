import React from "react";
import Menu from "./Menu";
import "../App.css";

export default function Extrato() {
  return (
    <div className="home-container">
      <Menu />
      <div className="extrato extrato-detalhe">
        <div>
          <h3>Extrato</h3>
        </div>
        <div className="filter">
          <span>Tipo de transação:</span>
          <select>
            <option>Cartão de crédito</option>
            <option>Boleto</option>
          </select>
        </div>
        <table>
          <tr>
            <th>Estabelecimento</th>
            <th>Tipo</th>
            <th>Valor</th>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>Transferencia Bancaria</td>
            <td>R$ 800,00</td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>Compra com cartão</td>
            <td>R$ 2555,00</td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>Compra com cartão</td>
            <td>R$ 2555,00</td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>Compra com cartão</td>
            <td>R$ 2555,00</td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>Compra com cartão</td>
            <td>R$ 2555,00</td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>Compra com cartão</td>
            <td>R$ 2555,00</td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>Compra com cartão</td>
            <td>R$ 2555,00</td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>Compra com cartão</td>
            <td>R$ 2555,00</td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>Compra com cartão</td>
            <td>R$ 2555,00</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
