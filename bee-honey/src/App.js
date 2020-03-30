
import React from 'react';
import './App.css';
import Login from './screens/Login/login.js';
import Topbar from './screens/principalScreen/components/Topbar/Topbar.js';



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
        <Topbar />

      </div>
    )
  }
}

export default App;
