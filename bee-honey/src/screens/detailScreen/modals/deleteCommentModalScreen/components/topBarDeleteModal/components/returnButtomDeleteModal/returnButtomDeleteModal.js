import React from 'react';
import './returnButtomDeleteModal.css';

function ReturnButtonDeleteModal(props) {
    return (
        <button className="returnButtonDeleteModal" onClick={props.CloseDeleteModal} />
    )
}

export default ReturnButtonDeleteModal;

