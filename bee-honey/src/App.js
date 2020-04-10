import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
///////// Components Screens //////////
import Login from './screens/Login/login.js';
import PantallaPrincipal from './screens/principalScreen/pantallaPrincipal.js';
import DetailScreen from './screens/detailScreen/detailScreen.js';
///////////////////////////////////////
import { fetchApario } from './services/apiariosService.js';

class App extends React.Component {
  state = { ListadoDeApiarios: {}, }

  // componentDidMount() {
  //   fetch('https://api.xaviaiot.com/bee_honey/apiaries?beekeeper_id=420')
  //     .then(response => {
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(response => {
  //       this.setState({ ListadoDeApiarios: response })
  //       console.log(this.state.ListadoDeApiarios);
  //     })
  // }

  getApiariesList = async () => {
    const res = await fetchApario();
    console.log(res);
  }

  componentDidMount() { this.getApiariesList(); }


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