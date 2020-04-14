import React from 'react';
import './humedad.css';
import Img from './components/img/img.js';
import Text from './components/text/text.js';
import Peso from './components/humedad/humedad.js';

function PesoToday(props) {
    return (
        <div className="pesoToday">
            <Img />
            <Peso humedad={props.humedad} />
            <Text />
        </div>
    )
}

export default PesoToday;