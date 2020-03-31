import React from 'react';
import Peso from './components/peso/peso.js';
import HumTemp from './components/humTemp/humTemp.js';
import CantidadYPorcentaje from './components/cantidadYPorcentaje/cantidadYPorcentaje.js';
import Notes from './components/notes/notes.js';

function DetailScreen() {
    return (
        <>
            <Peso />
            <HumTemp />
            <CantidadYPorcentaje/>
            <Notes/>
        </>
    )
}

export default DetailScreen;