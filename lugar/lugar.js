const axios = require('axios');


const getLngLat = async(direccion) => {

    let encodeURL = encodeURI(direccion);

    //let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QazbYTyM7gQ`)

    //if (resp.data.status === 'ZERO_RESULTS'){
    //    throw new Error (`No hay resultados para la ciudad ${direccion}`);
    //}

        //let location = resp.data.result[0];
        //let coors = location.geometry.location;

        //console.log('Direccion', location.formatted_address);
        //console.log('lat', coors.lat);
        //console.log('lng', coors.lng);

    return{
        //direccion: location.formatted_address,
        //lng: coors.lat,
        //lat: coors.lng
        direccion: direccion, 
        lng: '139.541968',
        lat: '36.244849'
    }

}

module.exports = {
    getLngLat
}