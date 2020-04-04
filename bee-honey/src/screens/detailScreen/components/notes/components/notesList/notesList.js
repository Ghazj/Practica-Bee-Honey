import React from 'react';
import './notesList.css';
import listaDeNotas from '../../../../../../services/listaDeNotas.js';

function NotesList(props) {
    return (
        <div className="notes">
            {listaDeNotas.map((currentNote, index) => (
                <div key={listaDeNotas[index].id} className="note">
                    <p className="date">{listaDeNotas[index].date}</p>
                    <div className="buttonAndTextComment">
                        <p className="textComment">{listaDeNotas[index].text}</p>
                        <button className="buttonComment" onClick={props.openDeleteModal}>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NotesList;