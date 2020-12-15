import React from 'react';
import { fetchDetailApiario } from '../../services/detalleDeApiarios.js';
import TopBarDS from './components/topBarDS/topBarDS.js';
import Peso from './components/peso/peso.js';
import HumTemp from './components/humTemp/humTemp.js';
import CantidadYPorcentaje from './components/cantidadYPorcentaje/cantidadYPorcentaje.js';
import Notes from './components/notes/notes.js';
import DeleteCommentModalScreen from './modals/deleteCommentModalScreen/deleteCommentModalScreen.js';
import './detailScreen.css';

class DetailScreen extends React.Component {
    state = {
        addCommentModal: 'none', DeleteModalIs: 'none', detalleDeApiario: {}
    }

    getApiariesList = async () => {
        const res = await fetchDetailApiario();
        this.setState({ detalleDeApiario: res.data })
        console.log(this.state.detalleDeApiario)
    }

    componentDidMount() {
        this.getApiariesList();
    }

    openDeleteModal = () => {
        this.setState({ DeleteModalIs: 'inline' })
    }

    closeDeleteModal = () => {
        this.setState({ DeleteModalIs: 'none' })
    }

    render() {
        return (
            <div className="detailScreen">
                <TopBarDS apiarioName={this.state.detalleDeApiario.name} status={this.state.detalleDeApiario.current_status} />
                <Peso lastWeight={this.state.detalleDeApiario.last_weight} productionPrediction={this.state.detalleDeApiario.production_prediction}/>
                <HumTemp humedad={this.state.detalleDeApiario.average_humidity} temperatura={this.state.detalleDeApiario.average_temperature} />
                <CantidadYPorcentaje colmenas={this.state.detalleDeApiario.beehives_count} colmenasConectadas={this.state.detalleDeApiario.beehoney_count} />
                <Notes openDeleteModal={this.openDeleteModal} notes={this.state.detalleDeApiario.observations} />
                {/* <DeleteCommentModalScreen DeleteModalIs={this.state.DeleteModalIs} CloseDeleteModal={this.closeDeleteModal} /> */}
            </div>
        )
    }
}

export default DetailScreen;