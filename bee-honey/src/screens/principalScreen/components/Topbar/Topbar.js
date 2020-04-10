import React from 'react';
import DrawerToggleButton from './components/SideDrower/DrawerToggleButton';
import BeeHoneyLogo from '../../../../assets/beeHoneyLogo.js';
import './Topbar.css';

const topbar = (props) => (
    <div className="topBarPrincipalScreen">
        <DrawerToggleButton OpenSideBar={props.OpenSideBar} />
        <div className="barraDeBusqueda" />
    </div>
);


export default topbar;