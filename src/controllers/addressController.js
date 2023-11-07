// * Controller com 1 request - endereço

const axios = require('axios').default;

require('dotenv').config();

const options = {
    method: 'GET',
    url: `https://${process.env.ADDRESS_API_HOST}/v1/geocode/autocomplete`,
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.ADDRESS_API_HOST
    },
    params: {
        lang: 'pt',
    }
};

const findAddress = async (req, res) => {

    let { text, limit = 10 } = req.query;

    options.params = {...options.params, text, limit };

    try {
        const response = await axios.request(options);
        res.status(response.status).send(response.data);    
    } catch (error) {
        const { status, data } = error.response;
        res.status(status).send(data);
    }
}

exports.get = findAddress;