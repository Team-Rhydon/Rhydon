const axios = require('axios');
const controllers = require('./controllers.js');
const Promise = require('bluebird');
const _ = require('lodash');
const {getReviews, getStyles, getDetails} = controllers;
function averageRating(ratings) {
  let count = 0;
  let total = 0;
  for (const val in ratings) {
    let value = Number(val);
    const cnt = Number(ratings[val]);
    count = count + cnt;
    total = total + (value * cnt);
  }
  return total/count;
};

// // promiseAllRelated in chunks
// exports.promiseAllRelated = function(data) {
//   return Promise.mapSeries(data, function(dataObj) {
//     return promiseAllOverview2(dataObj);
//   });
// };

exports.promiseAllRelated = function(data) {
  const reqArr = [];
  data.forEach((id) => {
    reqArr.push(getReviews(id));
    reqArr.push(getStyles(id));
    reqArr.push(getDetails(id));
  });
  return Promise.all(reqArr);
};

const promiseAllOverview2 = function(id) {
  const reqArr = [];
  reqArr.push(getReviews(id));
  reqArr.push(getStyles(id));
  reqArr.push(getDetails(id));
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
    // data quality check
    // const ratingGood = data[i*3].status === 'fulfilled';
    // const stylesGood = data[i*3 + 1].status === 'fulfilled';
    // const detailsGood = data[i*3 + 2].status === 'fulfilled';
    // const product_id = data[i*3].value.data.product_id;
    // get id if not continue
    // if (ratingGood) {
    //   product_id = data[i*3].value.data.product_id;
    // } else if (stylesGood) {
    //   product_id = data[i*3 + 1].value.data.product_id;
    // } else if (detailsGood) {
    //   product_id = data[i*3 + 2].value.data.product_id;
    // } else {
    //   continue;
    // }
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
    // }
    // if (detailsGood) {
    const detailsData = data[i*3 + 2].data;
    resObj[product_id].features = detailsData.features;
    resObj[product_id].category = detailsData.category;
    resObj[product_id].name = detailsData.name;
    // }
  }
  return resObj;
};

// // filter by chunks
// exports.filterRelated = function(data) {
//   const resObj = {};
//   debugger;
//   for (let i = 0; i < data.length/3; i++) {
//     const product_id = data[i*3].product_id;
//     resObj[product_id] = {};

//     // if (ratingGood) {
//     const ratingData = data[i*3].data;
//     resObj[product_id].rating = averageRating(data[i*3]);
//     // }
//     // if (stylesGood) {
//     const styles = data[i*3 + 1].results;
//     for (let j = 0; j < styles.length; j++) {
//       if (styles[j]['default?']) {
//         resObj[product_id].originalPrice = styles[j].original_price;
//         resObj[product_id].salePrice = styles[j].sale_price;
//         resObj[product_id].thumbnail = styles[j].photos[0].thumbnail_url;
//         resObj[product_id].img = styles[j].photos[0].url;
//         break;
//       } else {
//         resObj[product_id].originalPrice = styles[j].original_price;
//         resObj[product_id].salePrice = styles[j].sale_price;
//         resObj[product_id].thumbnail = styles[j].photos[0].thumbnail_url;
//         resObj[product_id].img = styles[j].photos[0].thumbnail_url;
//       }
//     }
//     // }
//     // if (detailsGood) {
//     const detailsData = data[i*3 + 2];
//     resObj[product_id].features = detailsData.features;
//     resObj[product_id].category = detailsData.category;
//     resObj[product_id].name = detailsData.name;
//     // }
//   }
//   return resObj;
// };

