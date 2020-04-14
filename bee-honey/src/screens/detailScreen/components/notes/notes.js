import React from 'react';
import './notes.css';
import NotesList from './components/notesList/notesList.js';
import Tittle from './components/tittle/tittle.js';

class Notes extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount = async () => {
        
    }
    render() {
        return (
            <div className="notesSection">
                <Tittle />
                <NotesList openDeleteModal={this.props.openDeleteModal} notes={this.props.notes} />
            </div>
        )
    }
}
export default Notes;