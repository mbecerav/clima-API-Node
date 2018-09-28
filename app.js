//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async() => {

    let coors = await lugar.getLngLat( argv.direccion );
    let tiempo = await clima.getClima(coors.lat, coors.lng);
    
    return console.log(`Weather: \n-- ${tiempo.lugar}, ${tiempo.pais} \n-- ${tiempo.temp}º`);
}

getInfo()
    .then (mensaje => console.log(mensaje))
    .catch (e => console.log ( e ) );

/*clima.getClima(getInfo.lat, getInfo.lng)
    //.then(temp => console.log(temp))
    .then(temp => console.log(`Weather: \n-- ${temp.lugar}, ${temp.pais} \n-- ${temp.temp}º`))
    .catch(e => console.log(e)) */