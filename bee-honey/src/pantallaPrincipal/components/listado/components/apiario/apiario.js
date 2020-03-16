import React from 'react';

class Apiario extends React.Component{
    render(){
        return(
            <>
            {this.props.listaApiarios.map((currApiario, index) => (
                <div>
                <p>{this.props.listaApiarios[index].name}</p>
                <p>{this.props.listaApiarios[index].lastAct}</p>
                <p>{this.props.listaApiarios[index].state}</p>
                <h1>---------</h1>
                </div>
            ))
            }
            </>
        )
    }
}

export default Apiario;