import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css';

const SideBar = props => (
    <div className="sideBar" style={{display: props.SideBarIs}}>
        <ul>
            <button onClick={props.HideSideBar}>Ocultar</button>
        </ul>
        <ul>
            <Link to="/"><button>Cerrar sesión</button></Link>
        </ul>
    </div>
);

export default SideBar;