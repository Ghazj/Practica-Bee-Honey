import React from 'react';
import TopBarDS from './components/topBarDS/topBarDS.js';
import Peso from './components/peso/peso.js';
import HumTemp from './components/humTemp/humTemp.js';
import CantidadYPorcentaje from './components/cantidadYPorcentaje/cantidadYPorcentaje.js';
import Notes from './components/notes/notes.js';
import DeleteCommentModalScreen from './modals/deleteCommentModalScreen/deleteCommentModalScreen.js';
import './detailScreen.css';

class DetailScreen extends React.Component {
    state = {
        addCommentModal:'none', DeleteModalIs:'none'
    }

    openDeleteModal = () =>{
        this.setState({DeleteModalIs:'inline'})
    }

    closeDeleteModal = () =>{
        this.setState({DeleteModalIs:'none'})
    }

    render() {
        return (
            <div className="principalScreen">
                <TopBarDS/>
                <Peso />
                <HumTemp />
                <CantidadYPorcentaje />
                <Notes openDeleteModal={this.openDeleteModal}/>
                <DeleteCommentModalScreen DeleteModalIs={this.state.DeleteModalIs} CloseDeleteModal={this.closeDeleteModal}/>
            </div>
        )
    }
}

export default DetailScreen;