import React from 'react';
import './styles.css';
class Apiario extends React.Component {
    render() {
        return (
            <>
                {this.props.listaApiarios.map((currApiario, index) => (
                    <div className="apiario">
                        <h3 className="name">{this.props.listaApiarios[index].name}</h3>
                        <div className="contenedorNoName">
                            <p className="lastAct">{this.props.listaApiarios[index].lastAct}</p>
                            {this.props.listaApiarios[index].status === 'OK' ? <p className="status">Okey</p> : <p className="status">Mal</p>}
                        </div>
                    </div>
                ))
                }
            </>
        )
    }
}

export default Apiario;