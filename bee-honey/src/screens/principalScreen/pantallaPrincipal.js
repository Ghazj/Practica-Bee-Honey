import React from 'react';
import Listado from './components/listado/listado.js';
import TopBar from './components/Topbar/Topbar.js';
import SideBar from './components/sideBar/sideBar.js';
//import { fetchApario } from '../../services/apiariosService.js';
import { fetchApario } from '../../services/apiariosService.js';

class PantallaPrincipal extends React.Component {
    state = {
        SideBarIs: 'none'
    }

    openSideBar = () => {
        this.setState({ SideBarIs: 'inline' })
    }

    hideSideBar = () => {
        this.setState({ SideBarIs: 'none' })
    }

    render() {
        return (
            <div className="principalScreen">
                <TopBar OpenSideBar={this.openSideBar} />
                <SideBar SideBarIs={this.state.SideBarIs} HideSideBar={this.hideSideBar} />
                <Listado />
            </div>
        );
    };
};

export default PantallaPrincipal;