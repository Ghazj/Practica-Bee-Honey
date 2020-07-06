import React from "react";
import './login.css';
import BeeHoneyLogo from '../../assets/beeHoneyLogo.js';
import Form from './components/form.js';
import Tittle from './components/tittle.js';
import Button from './components/button.js';
import Terminos from './components/terminos.js';

function Login() {
  return (
    <div className="login">
      <div className="loginContent">
        <BeeHoneyLogo styles={{ width: "100%", height: "auto" }} />
        <Form />
        <Button />
        <Terminos />
      </div>
    </div>
  );
}

export default Login;