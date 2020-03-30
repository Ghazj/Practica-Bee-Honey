import React from 'react';

import DrawerToggleButton from '../SideDrower/DrawerToggleButton';
import './Topbar.css';

const topbar = props => (
    <header className="topbar">
        <nav className="topbar__navigation">
            <div className="topbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="topbar__logo"><a href="/">The logo</a></div>
            <div className="spacer" />
            <div className="topbar_navigation-items">
               <ul>
                   <li><a href="/">products</a></li>
                   <li><a href="/">users</a></li>  
                      </ul>

            </div>
        </nav>
        </header>
);


export default topbar;