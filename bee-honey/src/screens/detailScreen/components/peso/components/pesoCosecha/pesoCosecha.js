import React from 'react';
import './pesoCosecha.css';
import Img from './components/img/img.js';
import Text from './components/text/text.js';
import Peso from './components/peso/peso.js';

function PesoCosecha(props) {
    return (
        <div className="pesoCosecha">
            <Img />
            <Text />
            <Peso productionPrediction={props.productionPrediction} />
        </div>
    )
}

export default PesoCosecha;