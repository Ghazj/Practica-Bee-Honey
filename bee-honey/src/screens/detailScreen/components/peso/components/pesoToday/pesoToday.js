import React from 'react';
import './pesoToday.css';
import Img from './components/img/img.js';
import Text from './components/text/text.js';
import Peso from './components/peso/peso.js';

function PesoToday() {
    return (
        <div className="pesoToday">
            <Img />
            <Text />
            <Peso />
        </div>
    )
}

export default PesoToday;