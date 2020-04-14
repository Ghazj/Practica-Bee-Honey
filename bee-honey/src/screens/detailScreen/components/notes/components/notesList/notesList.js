import React from 'react';
import './notesList.css';
import ReturnButton from '../../../../../../assets/returnButton.js';

class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="notes" >
                {
                    this.props.notes !== undefined && this.props.notes.map((currentNote, index) => (
                        <div key={this.props.notes[index].id} className="note">
                            <p className="date">{this.props.notes[index].date}</p>
                            <div className="buttonAndTextComment">
                                <p className="textComment">{this.props.notes[index].text}</p>
                                <ReturnButton styles={{ width: "7%", opacity: "66%" }} HandleClick={this.props.openDeleteModal} />
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default NotesList;