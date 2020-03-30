topbar-pp
import React, { Component } from 'react'; 

import React from 'react';
import './App.css';
import Login from './screens/Login/login.js';
development

import Topbar from './components/Topbar/Topbar';
import SideDrawer from './components/SideDrower/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';


  
class App extends Component {
  state = {
   sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
     this.setState((prevState) => { 
       return {sideDrawerOpen: !prevState.sideDrawerOpen};
     });
  };

  backdropClickHandler = () => {
     this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;
    
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop  click={this.backdropClickHandler} />
    }
  return (
topbar-pp
    <div style={{height: '100%'}}>
     <Topbar  drawerClickHandler={this.drawerToggleClickHandler} />
     <SideDrawer show={this.state.sideDrawerOpen} />

    {backdrop}
    
     <main style={{marginTop: '64px'}}>
     <p>This is the page content!</p>
     </main>

    <div className="App">
      <Login />
development
    </div>
  ); 
 }
}

export default App;
