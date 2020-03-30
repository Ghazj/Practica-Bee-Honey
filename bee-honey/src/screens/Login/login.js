import React from "react";
import './login.css';
import Form from './components/form.js';
import Tittle from './components/tittle.js';
import Button from './components/button.js';

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