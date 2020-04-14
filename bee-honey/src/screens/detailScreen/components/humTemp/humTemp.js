import React from 'react';
import './humTemp.css';
import Tittle from './components/tittle/tittle.js';
import Humedad from './components/humedad/humedad.js';
import Temperatura from './components/temperatura/temperatura.js';

function HumTemp(props) {
    return (
        <div className="humTemp">
            <Tittle />
            <div className="humTemps">
                <Humedad humedad={props.humedad} />
                <Temperatura temperatura={props.temperatura}/>
            </div>
        </div>
    )
}

export default HumTemp;