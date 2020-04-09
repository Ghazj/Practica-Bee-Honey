import React from "react";
import '../login.css';

function Form() {
  return (
    <div className="formLogin">
      <form>
        <label>
          <input id="usua" type="text" placeholder="Usuario" className="inputs" />
        </label>
        <br></br>
        <label>
          <input id="password" type="password" placeholder="Contraseña" className="inputs" />
        </label>
      </form>
    </div>
  );
}

export default Form;
