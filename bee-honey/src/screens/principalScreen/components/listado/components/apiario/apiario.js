import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import okLogo from '../../../../../../assets/statusOk.svg';
import cautionLogo from '../../../../../../assets/statusWrong.png';
import refreshLogo from '../../../../../../assets/refreshLogo.svg';

class Apiario extends React.Component {
    render() {
        return (
            <>
                {this.props.listaApiarios.map((currApiario, index) => (
                    <Link to="/detailScreen">
                        <div className="apiario" key={index}>
                            <h3 className="name">{this.props.listaApiarios[index].name}</h3>
                            <div className="contenedorNoName">
                                <img alt="Imagen Refresh" src={refreshLogo} className="refreshLogo" />
                                <p className="lastAct">{this.props.listaApiarios[index].lastAct}</p>
                                {this.props.listaApiarios[index].current_status === 'OK' ? <img alt="Status ok logo" src={okLogo} className="okLogo" /> : <img alt="Status caution logo" src={cautionLogo} className="cautionLogo" />}
                            </div>
                        </div>
                    </Link>
                ))
                }
            </>
        )
    }
}

export default Apiario;