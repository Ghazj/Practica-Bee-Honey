import React from 'react';
import './notesList.css';
import listaDeNotas from '../../../../comentarios/listaDeNotas.js';

function NotesList() {
    return (
        <div className="notes">
            {listaDeNotas.map((currentNote, index) => (
                <div key={listaDeNotas[index].id} className="note">
                    <p className="date">{listaDeNotas[index].date}</p>
                    <div className="buttonAndTextComment">
                        <p className="text">{listaDeNotas[index].text}</p>
                        <button className="button"></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NotesList;