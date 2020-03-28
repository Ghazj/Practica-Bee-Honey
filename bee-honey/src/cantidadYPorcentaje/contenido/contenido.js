import React from 'react';
import './contenido.css';
import detalleApiario from '../../services/api.js';

class Contenido extends React.Component {
    state = {
        cantidadDeColmenas: detalleApiario.beehives_count,
        cantidadDeColmenasInteligentes: detalleApiario.beehoney_count,
    }

    porcentaje = (colmenasTotales, colmenasInteligentes) => {
        return Math.trunc(colmenasInteligentes * 100 / colmenasTotales);
    }

    render() {
        return (
            <div className="section">
                <div className="countContent">
                    <p>{this.state.cantidadDeColmenas} Colmenas</p>
                    <p>|</p>
                    <p>{this.state.cantidadDeColmenasInteligentes} Conectadas</p>
                </div>
                <div className="barras">
                    <div className="barraBase" />
                    <div className="barraPorcentaje" />
                </div>
                <h2 className="porcentajeText">El {this.porcentaje(this.state.cantidadDeColmenas, this.state.cantidadDeColmenasInteligentes)}% de tu apiario<br />está conectado</h2>
                <p className="lastText">En base a esto se estima los valores generales.</p>
            </div>
        )
    }
}

export default Contenido;