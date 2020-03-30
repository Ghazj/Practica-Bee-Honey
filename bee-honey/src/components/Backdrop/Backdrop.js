import React from 'react';
import './Backdrop.css';

const backdrop = props => (
    <div className="backdrop"  onClick={props.click} > 
     <ul>
        <li>
           <a href="/">products</a>
         </li>
         <li> 
           <a href="/">users</a>
        </li>
     </ul></div>
);

export default backdrop;
