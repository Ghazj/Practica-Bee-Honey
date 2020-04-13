import React from 'react';
import './notes.css';
import NotesList from './components/notesList/notesList.js';
import Tittle from './components/tittle/tittle.js';

function Notes(props) {
    return (
        <div className="notesSection">
            <Tittle />
            <NotesList openDeleteModal={props.openDeleteModal} />
        </div>
    )
}

export default Notes;