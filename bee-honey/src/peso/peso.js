import React from 'react';
import './peso.css';
import Tittle from './components/tittle/tittle.js';
import PesoToday from './components/pesoToday/pesoToday.js';
import PesoCosecha from './components/pesoCosecha/pesoCosecha.js';

function Peso() {
    return (
        <div className="peso">
            <Tittle />
            <div className="pesos">
                <PesoToday />
                <PesoCosecha />
            </div>
        </div>
    )
}

export default Peso;