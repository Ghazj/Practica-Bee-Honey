import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css';

const SideBar = props => (
    <div id="sideBar" className={props.SideBarIs}>
        <ul className="ul">
            <button id="btnSideBar" className="buttonSideBar" onClick={props.handleSideBar}>Ocultar</button>
        </ul>
        <ul className="ul">
            <Link to="/"><button className="buttonSideBar">Cerrar sesión</button></Link>
        </ul>
    </div>
);

export default SideBar;