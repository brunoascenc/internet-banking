import React from 'react';
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Login/> */}
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      {/* <Home/> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
