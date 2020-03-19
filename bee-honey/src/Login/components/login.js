import React from "react";
import './login.css';
import Form from './form.js';
import Tittle from './tittle.js';
import Button from './button.js';


function Login() {
   return (
     <div className="Login">
         <Tittle/>
         <Form/>
         <Button/>
     </div>
   );
 }
export default Login;
