import React from 'react';
import Listado from './components/listado/listado.js';
import TopBar from './components/Topbar/Topbar.js';
import SideBar from './components/sideBar/sideBar.js';
import './pantallaPrincipal.css';
//import { fetchApario } from '../../services/apiariosService.js';

class PantallaPrincipal extends React.Component {
    state = {
        SideBarIs: 'close'
    }

    handleSideBar = () => {
        if (this.state.SideBarIs === 'close') {
            this.setState({ SideBarIs: 'open' })
        } else {
            let sideBar = document.getElementById('sideBar');
            sideBar.classList.add('closing');
            setTimeout(() => {
                this.setState({ SideBarIs: 'close' });
            }, 1000);
        }
    }

    render() {
        return (
            <div className="principalScreen">
                <TopBar handleSideBar={this.handleSideBar} />
                <SideBar SideBarIs={this.state.SideBarIs} handleSideBar={this.handleSideBar} />
                <Listado ListadoDeApiarios={this.props.ListadoDeApiarios} />
            </div>
        );
    };
};

export default PantallaPrincipal;