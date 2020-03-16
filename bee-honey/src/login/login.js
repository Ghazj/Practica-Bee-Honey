import React from "react";
import './login.css';
import 'circular-std';
import Form from './form.js';
import Tittle from './tittle.js';
import Buttom from './button.js';
 
 
 
export default function login() {
    return (
      <div className="login">
          <Tittle/>
          <Form/>
          <Buttom/>
       
      </div>
    );
  }