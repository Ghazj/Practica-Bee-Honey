
import React from 'react';
import './App.css';

import Peso from './peso/peso.js';

function App() {
  return (
    <div className="App">

      <Peso />

    </div>
  );

///////// Components Screens //////////
import Login from './screens/Login/login.js';
import PantallaPrincipal from './screens/principalScreen/pantallaPrincipal.js';
///////////////////////////////////////
class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    // let backdrop;

    // if (this.state.sideDrawerOpen) {
    //   backdrop = <Backdrop click={this.backdropClickHandler} />
    // }
    return (
      <div className="App">
        <Login />
        <PantallaPrincipal />
      </div>
    )
  }


}

export default App;