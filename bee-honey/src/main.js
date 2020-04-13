import React from 'react';
import { Switch, Route } from "react-router-dom";
///////// Components Screens //////////
import Login from './screens/Login/login.js';
import PantallaPrincipal from './screens/principalScreen/pantallaPrincipal.js';
import DetailScreen from './screens/detailScreen/detailScreen.js';
///////////////////////////////////////
import { fetchApario } from './services/apiariosService.js';

class Main extends React.Component {
  state = {
    ListadoDeApiarios: {},
  }

  getApiariesList = async () => {
    const res = await fetchApario();
    this.setState({ ListadoDeApiarios: res.data})
    console.log(this.state.ListadoDeApiarios);
  }

  componentDidMount() {
    this.getApiariesList();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/principalScreen">
            <PantallaPrincipal ListadoDeApiarios={this.state.ListadoDeApiarios}  />
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