import React from 'react';

import './Toolbar.css';

const toolbar = props => (
 <header className="toolbar"> 
     <nav className="toolbar__navegacion">
            <div></div>
            <div className="toolbar__titulo"><a href="/">Apiario Zona Sur</a></div>
            <div className="espacio" />
       <div className="toolbar_navegacion_item"> 
         <ul>
            <li><a>a las 12:30</a></li>
            <li><a>todo okey</a></li>
         </ul>
       </div>
    </nav>
  </header>
);

export default toolbar;