const axios = require('axios');
const controllers = require('./controllers.js');
const Promise = require('bluebird');

let {getReviews, getStyles, getDetails} = controllers;
function averageRating(data) {
let ratings = data.data.ratings;
let count = 0;
let total = 0;
for(let val in ratings) {
  value = Number(val);
  let cnt = Number(ratings[val]);
  count = count + cnt;
  total = total + (value * cnt);
}
return total/count;
};

exports.promiseAllRelated = function(data) {
  let reqArr = [];
  data.forEach((id) => {
    reqArr.push(getReviews(id));
    reqArr.push(getStyles(id));
    reqArr.push(getDetails(id));
  });
  return Promise.all(reqArr);
};

exports.promiseAllDetails = function(data) {
  let reqArr = [];
  data.forEach((id) => {
    reqArr.push(getDetails(id));
  });
  return Promise.all(reqArr);
};

exports.filterRelated = function(data) {
  let resObj = {};
    for(let i = 0; i < data.length/3; i++) {
      let product_id = data[i*3].data.product_id;
      resObj[product_id] = {};
      let styles = data[i*3 + 1].data.results;
      // get average rating for particular product_id
     resObj[product_id].rating = averageRating(data[i*3]);
     // get name, original price, sale price, img
      for(let j = 0; j < styles.length; j++) {
        if(styles[j]['default?']) {
          resObj[product_id].originalPrice = styles[j].original_price;
          resObj[product_id].salePrice = styles[j].sale_price;
          resObj[product_id].img = styles[j].photos[0].thumbnail_url;
        }
      }
      // If there are no default style use the first
      if(!resObj.originalPrice) {
        resObj[product_id].originalPrice = styles[0].original_price;
        resObj[product_id].salePrice = styles[0].sale_price;
        resObj[product_id].thumbnail = styles[0].photos[0].thumbnail_url;
        resObj[product_id].img = styles[0].photos[0].url;
      }

      // get features and category
      resObj[product_id].features = data[(i*3)+2].data.features;
      resObj[product_id].category = data[(i*3)+2].data.category;
      resObj[product_id].name = data[(i*3)+2].data.name;
    }
    return resObj;
}
