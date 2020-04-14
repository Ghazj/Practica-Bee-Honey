import React from 'react';
import './contenido.css';

class Contenido extends React.Component {

    porcentaje = (colmenasTotales, colmenasInteligentes) => {
        return Math.trunc(colmenasInteligentes * 100 / colmenasTotales);
    }

    render() {
        return (
            <div className="section">
                <div className="countContent">
                    <p>{this.props.colmenas} Colmenas</p>
                    <p>|</p>
                    <p>{this.props.colmenasConectadas} Conectadas</p>
                </div>
                <div className="barras">
                    <div className="barraBase"><div className="barraPorcentaje" style={{width:String(this.porcentaje(this.props.colmenas, this.props.colmenasConectadas))+'%'}} /></div>
                    
                </div>
                <h2 className="porcentajeText">El {this.porcentaje(this.props.colmenas, this.props.colmenasConectadas)}% de tu apiario<br />está conectado</h2>
                <p className="lastText">En base a esto se estima los valores generales.</p>
            </div>
        )
    }
}

export default Contenido;