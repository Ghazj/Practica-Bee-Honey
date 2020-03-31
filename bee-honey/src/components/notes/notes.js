import React from 'react';
import './notes.css';
import NotesList from './components/notesList/notesList.js';
import Tittle from './components/tittle/tittle.js';

function Notes() {
    return (
        <div className="notesSection">
            <Tittle />
            <NotesList />
        </div>
    )
}

export default Notes;