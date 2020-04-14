import React from 'react';
import './notesList.css';
import ReturnButton from '../../../../../../assets/returnButton.js';

class NotesList extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render() {
        return (
            <div className="notes" >
                {/* {
                    Object.keys(props.hola).map((currentNote, index) => (
                        <div key={props.hola[index].id} className="note">
                            <p className="date">{props.hola[index].date}</p>
                            <div className="buttonAndTextComment">
                                <p className="textComment">{props.hola[index].text}</p>
                                <ReturnButton styles={{ width: "7%", opacity: "66%" }} HandleClick={this.props.openDeleteModal} />
                            </div>
                        </div>
                    ))
                } */}
            </div>
        )
    }
}
export default NotesList;