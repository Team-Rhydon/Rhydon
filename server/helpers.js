const controllers = require('./controllers.js');
const Promise = require('bluebird');
const {getReviews, getStyles, getDetails} = controllers;
function averageRating(ratings) {
  let count = 0;
  let total = 0;
  for (const val in ratings) {
    const value = Number(val);
    const cnt = Number(ratings[val]);
    count = count + cnt;
    total = total + (value * cnt);
  }
  return total/count;
};

exports.promiseAllRelated = function(data) {
  const reqArr = [];
  data.forEach((id) => {
    reqArr.push(getReviews(id));
    reqArr.push(getStyles(id));
    reqArr.push(getDetails(id));
  });
  return Promise.all(reqArr);
};

exports.promiseAllOverview = function(id) {
  const reqArr = [];
  reqArr.push(getReviews(id));
  reqArr.push(getStyles(id));
  reqArr.push(getDetails(id));
  return Promise.all(reqArr);
};


exports.promiseAllDetails = function(data) {
  const reqArr = [];
  data.forEach((id) => {
    reqArr.push(getDetails(id));
  });
  return Promise.all(reqArr);
};

exports.filterRelated = function(data) {
  const resObj = {};
  for (let i = 0; i < data.length/3; i++) {
    const product_id = data[i*3].data.product_id;
    resObj[product_id] = {};

    // if (ratingGood) {
    const ratingData = data[i*3].data.ratings;
    resObj[product_id].rating = averageRating(ratingData);
    // }
    // if (stylesGood) {
    const styles = data[i*3 + 1].data.results;
    for (let j = 0; j < styles.length; j++) {
      if (styles[j]['default?']) {
        resObj[product_id].originalPrice = styles[j].original_price;
        resObj[product_id].salePrice = styles[j].sale_price;
        resObj[product_id].thumbnail = styles[j].photos[0].thumbnail_url;
        resObj[product_id].img = styles[j].photos[0].url;
        break;
      } else {
        resObj[product_id].originalPrice = styles[j].original_price;
        resObj[product_id].salePrice = styles[j].sale_price;
        resObj[product_id].thumbnail = styles[j].photos[0].thumbnail_url;
        resObj[product_id].img = styles[j].photos[0].thumbnail_url;
      }
    }
    const detailsData = data[i*3 + 2].data;
    resObj[product_id].features = detailsData.features;
    resObj[product_id].category = detailsData.category;
    resObj[product_id].name = detailsData.name;
    // }
  }
  return resObj;
};