import React from 'react';
import DrawerToggleButton from './components/SideDrower/DrawerToggleButton';
import './Topbar.css';

const topbar = (props) => (
    <div className="topBarPrincipalScreen">
        <DrawerToggleButton OpenSideBar={props.OpenSideBar} />
        <a href="/">Bee honey Logo</a>
        <div className="barraDeBusqueda" />
    </div>
);


export default topbar;