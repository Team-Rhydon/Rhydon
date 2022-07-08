const axios = require('axios');
// Get review rating
exports.getReviews = function(product_id) {
  return axios.get('/reviews/meta', {params: {product_id: product_id}}).catch((err) => {
    console.log('error in reviews/meta');
    res(err);
  });
};

exports.getStyles = function(product_id) {
  const url = '/products/' + product_id + '/styles';
  return axios.get(url).catch((err) => {
    console.log('error in get styles');
    res(err);
  });
};

exports.getRelated = function(product_id) {
  const url = '/products/' + product_id + '/related';
  return axios.get(url).catch((err) => {
    console.log('error in get related');
    res(err);
  });
};

exports.getDetails = function(product_id) {
  const url = '/products/' + product_id;
  return axios.get(url).catch((err) => {
    console.log('error in get details');
    res(err);
  });
};
