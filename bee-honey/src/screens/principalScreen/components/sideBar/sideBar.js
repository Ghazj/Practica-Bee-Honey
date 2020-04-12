import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css';

const SideBar = props => (
    <div className="sideBar" style={{ display: props.SideBarIs }}>
        <ul className="ul">
            <button className="buttonSideBar" onClick={props.HideSideBar}>Ocultar</button>
        </ul>
        <ul className="ul">
            <Link to="/"><button className="buttonSideBar">Cerrar sesión</button></Link>
        </ul>
    </div>
);

export default SideBar;