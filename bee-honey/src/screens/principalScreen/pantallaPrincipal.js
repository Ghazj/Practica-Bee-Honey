import React from 'react';
import Listado from './components/listado/listado.js';
import TopBar from './components/Topbar/Topbar.js';
import SideBar from './components/sideBar/sideBar.js';
import './pantallaPrincipal.css';
//import { fetchApario } from '../../services/apiariosService.js';

class PantallaPrincipal extends React.Component {
    state = {
        SideBarIs: 'none'
    }

    openSideBar = () => {
        if (this.state.SideBarIs === 'none') {
            this.setState({ SideBarIs: 'inline' })
        } else {
            this.setState({ SideBarIs: 'none' })
        }
    }

    hideSideBar = () => {
        this.setState({ SideBarIs: 'none' })
    }

    render() {
        return (
            <div className="principalScreen">
                <TopBar OpenSideBar={this.openSideBar} />
                <SideBar SideBarIs={this.state.SideBarIs} HideSideBar={this.hideSideBar} />
                <Listado ListadoDeApiarios={this.props.ListadoDeApiarios} />
            </div>
        );
    };
};

export default PantallaPrincipal;