import React from 'react';
import DrawerToggleButton from './components/SideDrower/DrawerToggleButton';
import './Topbar.css';

const topbar = () => (
    <div className="topBar">
        <DrawerToggleButton />
        <a href="/">Bee honey Logo</a>
        <div className="barraDeBusqueda"/>
    </div>
);


export default topbar;