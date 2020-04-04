import React from "react";
import { Link } from "react-router-dom";
import '../login.css';

function Button() {
  return (
    <Link to="/principalScreen">
      <button className="buttonLogin">Ingresar</button>
    </Link>
  );
}

export default Button;
