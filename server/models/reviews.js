const axios = require("axios");
require("dotenv").config();

//models --> essentially building helper functions to transform request and response data to/from API

module.exports = {
  getReviews: (query) => {
      return axios.get('/reviews', {params: {
        product_id: query.product_id,
        page: query.page || 1,
        count: query.count || 5,
        sort: query.sort || 'relevant'
      }})
  },

  postReview: (query, body) => {
      //TODO
  },

  getReviewMeta: (query) => {
    //TODO
    let params = {params: {product_id: query.product_id}};
    return axios.get('/reviews/meta', params)
  },

  putHelpful: (query) => {
      //TODO
  },

  putReport: (query) => {
      //TODO
  }
};
