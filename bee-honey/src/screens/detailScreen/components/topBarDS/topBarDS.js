import React from 'react';
import { Link } from 'react-router-dom';
import './topBarDS.css';
import okLogo from '../../../../assets/statusOk.svg';
import cautionLogo from '../../../../assets/statusWrong.png';
import refreshLogo from '../../../../assets/refreshLogo.svg';

const TopBarDS = () => (
  <header className="toolbar">
    <div className="topBarTop">
      <Link to="/principalScreen">
        <button>Volver</button>
      </Link>
      <h2>Titulo de apiario</h2>
    </div>
    <div className="topBarBot">
      <img alt="Imagen Refresh" src={refreshLogo} className="refreshLogoDS" />
      <p>a las tantas h</p>
      <p>|</p>
      <img alt="imagen status" src={cautionLogo} className="statusLogoDS" />
      <p>todo ok</p>
    </div>
  </header>
);

export default TopBarDS;