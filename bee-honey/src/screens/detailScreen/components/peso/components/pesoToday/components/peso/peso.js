import React from 'react';
import './peso.css';

function Peso(props) {
    return (
        <h1 className="pesoTodayNum">{props.lastWeight}</h1>
    )
}

export default Peso;