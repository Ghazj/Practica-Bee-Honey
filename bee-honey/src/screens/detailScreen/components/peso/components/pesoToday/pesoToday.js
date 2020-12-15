import React from 'react';
import './pesoToday.css';
import Img from './components/img/img.js';
import Text from './components/text/text.js';
import Peso from './components/peso/peso.js';

function PesoToday(props) {
    return (
        <div className="pesoToday">
            <Img />
            <Text />
            <Peso lastWeight={props.lastWeight} />
        </div>
    )
}

export default PesoToday;