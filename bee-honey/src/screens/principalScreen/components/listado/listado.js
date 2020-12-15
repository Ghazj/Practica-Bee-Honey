import React from 'react';
import Apiario from './components/apiario/apiario.js';
import "./styles.css";

function Listado(props){
    return(
        <div className="listado">
        <Apiario ListadoDeApiarios={props.ListadoDeApiarios}/>
        </div>
    )
}

export default Listado;