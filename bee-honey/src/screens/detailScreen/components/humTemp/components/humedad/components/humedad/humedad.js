import React from 'react';
import './humedad.css';

function Humedad(props) {
    return (
        <h1 className="pesoTodayNum">{props.humedad}</h1>
    )
}

export default Humedad;