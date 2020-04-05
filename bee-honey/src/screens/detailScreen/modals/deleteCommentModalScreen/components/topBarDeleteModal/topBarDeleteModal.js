import React from 'react';
import './topBarDeleteModal.css';
import ReturnButtonDeleteModal from './components/returnButtomDeleteModal/returnButtomDeleteModal.js';
import ApiarioNameDeleteModal from './components/apiarioNameDeleteModal/apiarioNameDeleteModal.js';
import EraseApiarioButtom from './components/eraseApiarioButton/eraseApiarioButton.js';
import PesoTotalDeleteModal from './components/pesoTotalDeleteModal/pesoTotalDeleteModal.js';
import MielFinalDeleteModal from './components/mielFinalDeleteModal/mielFinalDeleteModal.js';
import HumedadDeleteModal from './components/humedadDeleteModal/humedadDeleteModal.js';
import TemperaturaDeleteModal from "./components/temperaturaDeleteModal/temperaturaDeleteModal.js";

function TopBarDeleteModal(props) {
    return (
        <div className="topBarDeleteModal">
            <div className="buttonsContent">
                <ReturnButtonDeleteModal CloseDeleteModal={props.CloseDeleteModal} />
                <ApiarioNameDeleteModal />
                <EraseApiarioButtom />
            </div>
            <div className="infoContent">
                <PesoTotalDeleteModal/>
                <MielFinalDeleteModal/>
                <HumedadDeleteModal/>
                <TemperaturaDeleteModal/>
            </div >
        </div >
    )
}

export default TopBarDeleteModal;