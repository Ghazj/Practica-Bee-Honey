import React from 'react';
import Contenido from './contenido/contenido.js';

function CantidadYPorcentaje(props) {
    return (
        <Contenido colmenas={props.colmenas} colmenasConectadas={props.colmenasConectadas}/>
    )
}

export default CantidadYPorcentaje;