import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Extrato from './components/Extrato'
import Cartoes from './components/Cartoes'
import Transferencia from './components/Transferencia'
import Pagamento from './components/Pagamento'
import Depositar from './components/Depositar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/extrato" component={Extrato}/>
          <Route path="/cartoes" component={Cartoes}/>
          <Route path="/transferencia" component={Transferencia}/>
          <Route path="/pagamentos" component={Pagamento}/>
          <Route path="/depositar" component={Depositar}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
