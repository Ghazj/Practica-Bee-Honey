import React from "react";
import './login.css';
import 'circular-std';

 
 
 
export default function form() {
    return (
      <div className="form">
        <form>
          <label> 
            <input id="usua" type="text" placeholder= "Usuario"/>
          </label>
          <br></br>
          <label>
        
            <input id="password" type="password" placeholder="Contraseña" />
          </label>
          
          
 
        </form>
      </div>
    );
  }
