// * Controller com 1 request - previsão do tempo

const axios = require('axios').default;

require('dotenv').config();

const options = {
    method: 'GET',
    url: `https://${process.env.WEATHERAPI_HOST}/forecast.json`,
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.WEATHERAPI_HOST
    },
    params: {
        lang: 'pt',
    }
};

const findWeather = async (req, res) => {

    let { q, days = 3 } = req.query;

    options.params = {...options.params, q, days };

    try {
        const response = await axios.request(options);
        res.status(response.status).send(response.data);    
    } catch (error) {
        const { status, data } = error.response;
        res.status(status).send(data);
    }
    
}

exports.get = findWeather;