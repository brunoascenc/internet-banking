import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  //States para usar os dados
  const [dados, setDados] = useState([]);
  const [transacoes, setTransacoes] = useState([]);
  const [chartData, setChartData] = useState([]);

  const getData = () => {
    //Variaveis do gráfico
    let entrada = [];
    let saida = [];
    axios
      .all([
        axios.get("http://localhost:3004/empresas"),
        axios.get("http://localhost:3004/transacoes"),
      ])
      .then((res) => {
        const empresasData = res[0].data;
        const transacoesData = res[1].data;
        //Acessando os valores para habilitar no gráfico
        for (const dataValor of transacoesData) {
          dataValor.credito === true
            ? entrada.push(dataValor.valor).toFixed(2)
            : saida.push(dataValor.valor)
        }
        setDados(empresasData);
        setTransacoes(transacoesData);

        //Inserindo os valores no gráfico
        setChartData({
          labels: [
            "Jan",
            "Fev",
            "Mar",
            "Mai",
            "Abr",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
          datasets: [
            {
              label: "Entrada R$",
              data: entrada,
              borderColor: 'rgb(69, 181, 74)',
              borderWidth: 2,
            },
            {
              label: "Saida R$",
              data: saida,
              borderColor: 'rgb(240, 68, 68)',
              borderWidth: 2,
            },
          ]
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  //Variaveis a serem usadas pelos componentes
  const value = {
    dados: [dados, setDados],
    transacoes: [transacoes, setTransacoes],
    grafico: [chartData],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
