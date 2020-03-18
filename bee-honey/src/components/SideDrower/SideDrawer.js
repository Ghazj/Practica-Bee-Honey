import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
   return (
    <nav className={drawerClasses}>
      <ul>
        <li>
           <a href="/">products</a>
         </li>
         <li> 
           <a href="/">users</a>
        </li>
     </ul>
   </nav>
   );
};

export default sideDrawer;
