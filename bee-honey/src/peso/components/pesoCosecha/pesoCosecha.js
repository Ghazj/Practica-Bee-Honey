import React from 'react';
import './pesoCosecha.css';
import Img from './components/img/img.js';
import Text from './components/text/text.js';
import Peso from './components/peso/peso.js';

function PesoCosecha() {
    return (
        <div className="pesoCosecha">
            <Img />
            <Text />
            <Peso />
        </div>
    )
}

export default PesoCosecha;