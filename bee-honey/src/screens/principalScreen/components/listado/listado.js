import React from 'react';
import listaApiarios from './consultaListaDeApiarios.js';
import Apiario from './components/apiario/apiario.js';
import "./styles.css";

function Listado(){
    return(
        <div className="listado">
        <Apiario listaApiarios={listaApiarios}/>
        </div>
    )
}

export default Listado;