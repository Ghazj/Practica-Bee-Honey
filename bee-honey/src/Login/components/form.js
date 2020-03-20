import React from "react";
import './login.css';

function Form() {
  return (
    <div className="form">
      <form>
        <label>
          <input id="usua" type="text" placeholder="Usuario" />
        </label>
        <br></br>
        <label>
          <input id="password" type="password" placeholder="Contraseña" />
        </label>
      </form>
    </div>
  );
}

export default Form;
