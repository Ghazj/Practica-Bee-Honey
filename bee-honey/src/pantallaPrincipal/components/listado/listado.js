import React from 'react';
import listaApiarios from './consultaListaDeApiarios.js';
import Apiario from './components/apiario/apiario.js';


function Listado(){
    return(
        <>
        <h2>Listado</h2>
        <Apiario listaApiarios={listaApiarios}/>
        </>
    )
}

export default Listado;