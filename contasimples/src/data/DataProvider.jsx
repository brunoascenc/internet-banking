import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [dados, setDados] = useState([]);
    const [transacoes, setTransacoes] = useState([]);

    const getData = () => {
        axios
          .all([
            axios.get("http://localhost:3004/empresas"),
            axios.get("http://localhost:3004/transacoes"),
          ])
          .then((res) => {
            const empresasData = res[0].data;
            const transacoesData = res[1].data;
            setDados(empresasData);
            setTransacoes(transacoesData);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      useEffect(() => {
        getData();
      }, []);

      const value = {
        dados: [dados, setDados],
        transacoes: [transacoes, setTransacoes]
      };
    

    return (
        <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
    )
}
