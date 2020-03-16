import React from 'react';
import Listado from './components/listado/listado.js';


class PantallaPrincipal extends React.Component{
    render(){
        return(
            <div>
                <h1>home screen!</h1>
                <Listado/>
            </div>
        );
    };
};

export default PantallaPrincipal;