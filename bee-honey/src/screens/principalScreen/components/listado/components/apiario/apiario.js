import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import okLogo from '../../../../../../assets/statusOk.svg';
import cautionLogo from '../../../../../../assets/statusWrong.png';
import refreshLogo from '../../../../../../assets/refreshLogo.svg';
import { fetchApario } from '../../../../../../services/apiariosService.js';

class Apiario extends React.Component {
    state = {
        ListadoDeApiarios: {}
    }

    getApiariesList = async () => {
        const res = await fetchApario();
        this.setState({ ListadoDeApiarios: res.data })
    }

    componentDidMount() {
        this.getApiariesList();
    }

    render() {
        return (
            <>
                {Object.keys(this.state.ListadoDeApiarios).map((currApiario, index) => (
                    <div className="apiario" key={index}>
                        <Link to="/detailScreen" className="link">
                        </Link>
                        <h1 className="name">{this.state.ListadoDeApiarios[index].name}</h1>
                        <div className="contenedorNoName">
                            <img alt="Imagen Refresh" src={refreshLogo} className="refreshLogo" />
                            <p className="lastAct">Hace {this.state.lastAct} min</p>
                            {this.state.ListadoDeApiarios[index].current_status === 'OK' ? <img alt="Status ok logo" src={okLogo} className="okLogo" /> : <img alt="Status caution logo" src={cautionLogo} className="cautionLogo" />}
                        </div>
                    </div>
                ))
                }
            </>
        )
    }
}

export default Apiario;