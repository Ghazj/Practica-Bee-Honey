import React from 'react';
import Peso from './components/peso/peso.js';
import HumTemp from './components/humTemp/humTemp.js';
import CantidadYPorcentaje from './components/cantidadYPorcentaje/cantidadYPorcentaje.js';
import Notes from './components/notes/notes.js';
import DeleteCommentModalScreen from './modals/deleteCommentModalScreen/deleteCommentModalScreen.js';

class DetailScreen extends React.Component {
    render() {
        return (
            <>
                <Peso />
                <HumTemp />
                <CantidadYPorcentaje />
                <Notes />
                <DeleteCommentModalScreen/>
            </>
        )
    }
}

export default DetailScreen;