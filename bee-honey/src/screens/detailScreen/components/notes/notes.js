import React from 'react';
import './notes.css';
import NotesList from './components/notesList/notesList.js';
import Tittle from './components/tittle/tittle.js';

class Notes extends React.Component {
    constructor(props){
        super(props);
        console.log(this)
    }

    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div className="notesSection">
                <Tittle />
                {/* <NotesList openDeleteModal={this.props.openDeleteModal} hola={this.props.Hola} /> */}
            </div>
        )
    }
}
export default Notes;