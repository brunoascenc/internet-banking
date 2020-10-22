import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import "../../App.css";

export default function SaldoEmpresa() {
  const value = useContext(DataContext);
  const [dados] = value.dados;
  const filterEmpresa = dados.filter((emp) => emp.empresaId === 1);

  return (
    <div className="saldo">
      <h3>Saldo da conta</h3>
      {filterEmpresa.map((empresa) => {
        return <span key={empresa.empresaId}>R$: {empresa.saldo}</span>;
      })}
    </div>
  );
}
