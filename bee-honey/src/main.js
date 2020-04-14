import React from 'react';
import { Switch, Route } from "react-router-dom";
///////// Components Screens //////////
import Login from './screens/Login/login.js';
import PantallaPrincipal from './screens/principalScreen/pantallaPrincipal.js';
import DetailScreen from './screens/detailScreen/detailScreen.js';
///////////////////////////////////////

class Main extends React.Component {
  state = {
    idApiarioSeleccionado: 0
  }

  clickApiario(apiarioid) {

  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/principalScreen">
            <PantallaPrincipal ListadoDeApiarios={this.state.ListadoDeApiarios} />
          </Route>
          <Route path="/detailScreen">
            <DetailScreen />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default Main;