import React from 'react';
import './notesList.css';
import listaDeNotas from '../../../../../../services/listaDeNotas.js';
import ReturnButton from '../../../../../../assets/returnButton.js';

function NotesList(props) {
    return (
        <div className="notes">
            {listaDeNotas.map((currentNote, index) => (
                <div key={listaDeNotas[index].id} className="note">
                    <p className="date">{listaDeNotas[index].date}</p>
                    <div className="buttonAndTextComment">
                        <p className="textComment">{listaDeNotas[index].text}</p>
                        <ReturnButton styles={{ width: "7%", opacity: "66%" }} HandleClick={props.openDeleteModal} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NotesList;