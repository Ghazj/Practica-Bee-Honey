import React from 'react';
import Listado from './components/listado/listado.js';
import { fetchApario } from './services/apiariosService';

class PantallaPrincipal extends React.Component {

    getApiariesList = async () => {
        const res = await fetchApario();
        console.log(res);
    }

    componentDidMount() { this.getApiariesList(); }

    // getApiariesList();

    render() {
        return (
            <div>
                <h1>topBar</h1>
                <Listado />
            </div>
        );
    };
};

export default PantallaPrincipal;
/* .
estas?okok
comprati pantalla
que raro que no te agarre 
sisi estaba viendo poruqe no anda fijate ahora 
de pronto es la api
no se sie stá funcionando de verdad. tenía entendido que tenían problemas con eso,
asi entro y veo que pasa y te digo porque aca anda medio chot ajaja 
el repo es publico? el de git hub? si, Practica-bee-honey
jajja sisi pero no anda :c jaja 
isntalaste apisauce no?
jajajaja, igual es super divertido esta función, re cheto. sip, igual deja me fijo de nuev
en leo
el package no esta jaja instalala 
la brach no tiene nada que ver no?
sisis tiene que ver  con las dependencias 
sisi eso
que feas las terminales de windows jajaj las odio no? parece windows :o instalate terminator 
se ve muy parecido a window ese linux 
bueno fiajte ahora 
npm install --save apisauce
bueno, ahí está instalando.esto no es windows, es linux lite xd xd xd xd
bueh, ya está
sigue mal.. go firefox
sisi ahi anduvo tenias mal una variable 
pero no te deja consultar  por que esta mal la consulta dice 
sisi a ver la doc
ponelo ahi proque el link no me va a deajr creo
de igual forma, las dependecies no se actualizaron, o si?
debe ser el tema del XXX

https://docs.google.com/document/d/1iXFWe3fBFGRXPbJsJvKbZMujGb_4Dd9Y21tyIG16-78/edit?usp=sharing

segun si tienes el link, puedes ver y comentar. 

*/