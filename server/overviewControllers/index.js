// maybe require models or do everythign on this file
require('dotenv').config();
const axios = require('axios');

// Creates base url for API
axios.defaults.baseURL = process.env.BASE_URL;

// Adds API key to all requests
axios.defaults.headers.common['Authorization'] = process.env.API_KEY;

const handlerError = (res, err) => res.status(501).send(err);
const handleResponse = (res, data, code) => res.status(code).send(data);

module.exports = {

  getProduct: (req, res) => {

    const pageNum = undefined || 1;
    const countNum = undefined || 5;

    axios.get('/products', { params: {
      page: pageNum,
      count: countNum
    }})
      .then((response) => console.log(response.data))
      .catch((err) => handlerError(res, err))
  }

}
