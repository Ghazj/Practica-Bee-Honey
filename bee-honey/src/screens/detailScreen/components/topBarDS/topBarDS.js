import React from 'react';
import { Link } from 'react-router-dom';
import './topBarDS.css';
import ReturnButton from '../../../../assets/returnButton.js';
import okLogo from '../../../../assets/statusOk.svg';
import cautionLogo from '../../../../assets/statusWrong.png';
import refreshLogo from '../../../../assets/refreshLogo.svg';

const TopBarDS = (props) => (
  <header className="toolbar">
    <div className="topBarButtonContent">
      <Link to="/principalScreen" className="linkTopBarDetailScreen" >
        <ReturnButton styles={{ width: "100%", marginTop: "10%", marginLeft: "20%" }} />
      </Link>
    </div>

    <div className="topBarInfoContent">
      <div>
        <h2 className="tittleDS">{props.apiarioName}</h2>
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
          {props.status === 'OK' ? <><img alt="Status ok logo" src={okLogo} className="statusLogoDS" /> <p className="pes">Todo ok</p> </> : <><img alt="Status caution logo" src={cautionLogo} className="statusLogoDS" /> <p className="pes">Revisar</p></>}
        </div>
      </div>
    </div>
  </header>
);

export default TopBarDS;