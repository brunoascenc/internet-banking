import React from "react";
import { DataProvider } from "./data/DataProvider";
import Login from "./components/Login";
import Home from "./components/Home";
import Extrato from './components/Extrato'
import Cartoes from './components/Cartoes'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <DataProvider>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/extrato" component={Extrato}/>
          <Route path="/cartoes" component={Cartoes}/>
        </Switch>
      </div>
    </Router>
    </DataProvider>
  );
}

export default App;
