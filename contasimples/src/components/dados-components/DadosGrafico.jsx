import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import { Line } from "react-chartjs-2";

export default function DadosGrafico() {
  const value = useContext(DataContext);
  const [grafico] = value.grafico;

  return (
    <div className="grafico">
      <Line
        data={grafico}
        options={{
          responsive: true,
        }}
      />
    </div>
  );
}
