import React from 'react';
import { Link } from 'react-router-dom';
import './topBarDS.css';
import okLogo from '../../../../assets/statusOk.svg';
import cautionLogo from '../../../../assets/statusWrong.png';
import refreshLogo from '../../../../assets/refreshLogo.svg';

const TopBarDS = () => (
  <header className="toolbar">
    <div className="topBarButtonContent">
        <Link to="/principalScreen" className="linkTopBarDetailScreen">
      <button className="buttonTopBarDS">
      </button>
      </Link>
    </div>

    <div className="topBarInfoContent">
      <div>
        <h2 className="tittleDS">Titulo de apiario</h2>
      </div>
      <div className="infoContentDS">
        <div className="infoContentDS">
          <img alt="Imagen Refresh" src={refreshLogo} className="refreshLogoDS" />
          <p className="pes">a las 15:58 hs</p>
        </div>
        <div className="infoContentDS">
          <p>|</p>
        </div>
        <div className="infoContentDS">
          <img alt="imagen status" src={cautionLogo} className="statusLogoDS" />
          <p className="pes">todo ok</p>
        </div>
      </div>
    </div>
  </header>
);

export default TopBarDS;