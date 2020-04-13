import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
///////// Components Screens //////////
import Login from './screens/Login/login.js';
import PantallaPrincipal from './screens/principalScreen/pantallaPrincipal.js';
import DetailScreen from './screens/detailScreen/detailScreen.js';
///////////////////////////////////////
import ReturnLogo from './assets/returnButton.js';
import ReturnButton from './assets/returnButton.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/principalScreen" component={PantallaPrincipal} />
          <Route path="/detailScreen" component={DetailScreen} />
        </Switch>
      </div>
    )
  }
}

export default App;