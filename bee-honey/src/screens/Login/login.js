import React from "react";
import './login.css';
import BeeHoneyLogo from './components/beeHoneyLogo.js';
import Form from './components/form.js';
import Tittle from './components/tittle.js';
import Button from './components/button.js';
import Terminos from './components/terminos.js';

function Login() {
  return (
    <div className="login">
      <div className="loginContent">
        <BeeHoneyLogo/>
        <Tittle />
        <Form />
        <Button />
        <Terminos/>
      </div>
    </div>
  );
}

export default Login;