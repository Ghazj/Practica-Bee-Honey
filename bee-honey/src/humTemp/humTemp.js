import React from 'react';
import './peso.css';
import Tittle from './components/tittle/tittle.js.js';
import PesoToday from './components/humedad/pesoToday.js.js.js.js';
import PesoCosecha from './components/temperatura/pesoCosecha.js.js.js';

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