const axios = require('axios');
const _ = require('lodash');
//const reviewControls = require('./reviewsControllers.js');
// Get review rating
exports.getReviews = function(product_id) {
  return axios.get('/reviews/meta', {params: {product_id: product_id}});
};

exports.getStyles = function(product_id) {
  const url = '/products/' + product_id + '/styles';
  return axios.get(url);
};

exports.getRelated = function(product_id) {
  const url = '/products/' + product_id + '/related';
  return axios.get(url);
};

exports.getDetails = function(product_id) {
  const url = '/products/' + product_id;
  return axios.get(url);
};