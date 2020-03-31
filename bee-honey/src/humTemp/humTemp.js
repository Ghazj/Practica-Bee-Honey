import React from 'react';
import './humTemp.css';
import Tittle from './components/tittle/tittle.js';
import Humedad from './components/humedad/humedad.js';
import Temperatura from './components/temperatura/temperatura.js';

function Peso() {
    return (
        <div className="peso">
            <Tittle />
            <div className="pesos">
                <Humedad />
                <Temperatura />
            </div>
        </div>
    )
}

export default Peso;