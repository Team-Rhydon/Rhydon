// maybe require models or do everythign on this file
require('dotenv').config();
const axios = require('axios');

// Creates base url for API
axios.defaults.baseURL = process.env.BASE_URL;

// Adds API key to all requests
axios.defaults.headers.common['Authorization'] = process.env.JAPI_KEY;

const handlerError = (res, err) => res.status(501).send(err);
const handleResponse = (res, data, code) => res.status(code).send(data);

module.exports = {

  getProduct: (req, res) => {
    productId = req.query.id;

    axios.get(`/products/${productId}`)
      .then(({data}) => handleResponse(res, data, 200))
      .catch((err) => handlerError(res, err))
  },

  getStars: (req, res) => {
    productId = req.query.id;

    axios.get(`/reviews/meta`, {
      params: {
        product_id: productId
      }
    })
      .then(({data}) => handleResponse(res, data, 200))
      .catch((err) => handlerError(res, err))
  },

  getStyles: (req, res) => {
      productId = req.query.id;

      axios.get(`/products/${productId}/styles`)
        .then(({data}) => handleResponse(res, data.results, 200))
        .catch((err) => handlerError(res, err))
  },

  getReviews: (req, res) => {
      productId = req.query.id;

      axios.get(`/reviews`, {
        params: {
          product_id: productId
        }
      })
        .then((response) => handleResponse(res, response.data, 200))
        .catch((err) => handlerError(res, err))
  }

}
