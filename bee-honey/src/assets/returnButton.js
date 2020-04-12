import React from 'react';
import returnButton from './returnButton.svg';

let ReturnButton = (props) => {
    return (
        <img alt="Botón de regresar" src={returnButton} style={props.styles} onClick={props.HandleClick} />
    )
}

export default ReturnButton;