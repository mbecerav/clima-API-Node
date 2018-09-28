const axios = require('axios');


const getClima = async(lat, lon) => {

    //https://home.openweathermap.org/api_keys  Weather API Key!
    //My Weather APIKey = 5c0e23d1165205f010612887eb825f65

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=5c0e23d1165205f010612887eb825f65`)

    return {
        temp: resp.data.main.temp,
        lugar: resp.data.name,
        pais: resp.data.sys.country
    }
}

module.exports = {
    getClima
}