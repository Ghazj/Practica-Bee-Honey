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
                {Object.keys(this.props.ListadoDeApiarios).map((currApiario, index) => (
                    <div className="apiario" key={index}>
                        <Link to="/detailScreen" className="link">
                        </Link>
                        <h1 className="name">{this.props.ListadoDeApiarios[index].name}</h1>
                        <div className="contenedorNoName">
                            <img alt="Imagen Refresh" src={refreshLogo} className="refreshLogo" />
                            {/* <p className="lastAct">Hace {this.props.ListadoDeApiarios[index].lastAct} min</p> */}
                            {this.props.ListadoDeApiarios[index].current_status === 'OK' ? <img alt="Status ok logo" src={okLogo} className="okLogo" /> : <img alt="Status caution logo" src={cautionLogo} className="cautionLogo" />}
                        </div>
                    </div>
                ))
                }
            </>
        )
    }
}

export default Apiario;