import React from 'react';
import Peso from './components/peso/peso.js';
import HumTemp from './components/humTemp/humTemp.js';
import CantidadYPorcentaje from './components/cantidadYPorcentaje/cantidadYPorcentaje.js';
import Notes from './components/notes/notes.js';
import DeleteCommentModalScreen from './modals/deleteCommentModalScreen/deleteCommentModalScreen.js';

class DetailScreen extends React.Component {
    state = {
        addCommentModal:'none', DeleteModalIs:'none'
    }

    openDeleteModal = () =>{
        this.setState({DeleteModalIs:'inline'})
    }

    render() {
        return (
            <>
                <Peso />
                <HumTemp />
                <CantidadYPorcentaje />
                <Notes openDeleteModal={this.openDeleteModal}/>
                <DeleteCommentModalScreen DeleteModalIs={this.state.DeleteModalIs}/>
            </>
        )
    }
}

export default DetailScreen;