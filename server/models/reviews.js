const axios = require("axios");

//models --> essentially building helper functions to transform request and response data to/from API

module.exports = {};

module.exports.getReviews = (query) => {
  return axios.get('/reviews', query)
}

module.exports.postReview = (query, body) => {
  //TODO
}

module.exports.getReviewMeta = (query) => {
  //TODO
  let params = {params: {product_id: product_id}}
}

module.exports.putHelpful = (query) => {
  //TODO
}

module.exports.putReport = (query) => {
  //TODO
}