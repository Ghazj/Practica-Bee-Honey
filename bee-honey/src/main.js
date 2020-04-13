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
    this.setState({ ListadoDeApiarios: res })
    console.log(this.state.ListadoDeApiarios);
  }

  componentDidMount() { this.getApiariesList(); }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/principalScreen" component={PantallaPrincipal} />
          <Route path="/detailScreen" component={DetailScreen} />
        </Switch>
      </div>
    )
  }
}

export default Main;