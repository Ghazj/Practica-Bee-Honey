import React from 'react';
import './App.css';
///////// Components Screens //////////
import Login from './screens/Login/login.js';
import PantallaPrincipal from './screens/principalScreen/pantallaPrincipal.js';
import DetailScreen from './screens/detailScreen/detailScreen.js';
///////////////////////////////////////

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Login />
        <PantallaPrincipal />
        <DetailScreen />
      </div>
    )
  }
}

export default App;