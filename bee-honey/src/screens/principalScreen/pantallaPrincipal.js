import React from 'react';
import Listado from './components/listado/listado.js';
import TopBar from './components/Topbar/Topbar.js';
//import { fetchApario } from '../../services/apiariosService.js';

class PantallaPrincipal extends React.Component {

    /* getApiariesList = async () => {
         const res = await fetchApario();
         console.log(res);
     }
 
     componentDidMount() { this.getApiariesList(); }
 
     getApiariesList();
    */
    render() {
        return (
            <div>
                <TopBar />
                <Listado />
            </div>
        );
    };
};

export default PantallaPrincipal;