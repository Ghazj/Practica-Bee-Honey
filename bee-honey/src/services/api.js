
let detalleApiario = {

    name: "La tranquilidad",
    id: 12345,
    current_status: "OK" | "NO_WEIGHT" | "TEMP_VARIATION" | "HUM_VARIATION",
    last_weight: "20.4kg",
    production_prediction: "10.4kg",
    beehives_count: 30,
    beehoney_count: 13,
    average_humidity: "50%",
    average_temp: "20° C",
    observations: [
        {
            text: "Le dí medicación a la colmena 24",
            id: 1847,
            date: "2020-03-19T07:22Z"
        },
        {
            text: "Hasta la proxima",
            id: 2125,
            date: "2020-03-19T07:22Z"
        },
        {
            text: "comentario número 3 asi que voy a escribir mucho para que como se pone esto en la pantalla, a lo mejor los apicultores tengan que hacer observaciones muy largas para ciertos apiarios y situacione!!",
            id: 3478,
            date: "2020-03-19T07:22Z"
        },
        {
            text: "Hasta lo proxima comentario 3",
            id: 4125,
            date: "2020-03-19T07:22Z"
        }
    ]
}

export default detalleApiario;

// import {create} from 'apisauce';

// const api = create({
//     baseURL: 'https://api.xaviaiot.com/bee_honey'
// });

// export default api;

