import React from 'react';
import './temperatura.css';
import Img from './components/img/img.js';
import Text from './components/text/text.js';
import Peso from './components/temperatura/temperatura.js';

function PesoCosecha(props) {
    return (
        <div className="pesoCosecha">
            <Img />
            <Peso temperatura={props.temperatura} />
            <Text />
        </div>
    )
}

export default PesoCosecha;