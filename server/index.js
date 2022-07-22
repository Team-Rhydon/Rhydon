require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const _ = require('lodash');
const app = express();
const Promise = require('bluebird');
const controllers = require('./controllers.js');
const reviewRouter = require('./routes/reviews.js');
const helpers = require('./helpers.js');

const {getReviews, getStyles, getRelated, getDetails} = controllers;
const {averageRating, promiseAllRelated, filterRelated, promiseAllDetails, promiseAllOverview, filterDetails} = helpers;

// Setup Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// Creates base url for API
axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

// Adds API key to all requests
axios.defaults.headers.common.Authorization = process.env.API_KEY;

// Setup Routes
app.use('/reviews', reviewRouter); // directs all requests to endpoint 'reviews' to reviews router


// Get related items in chunks
// app.get('/related', (req, res) => {
//   const product_id = req.query.id;
//   getRelated(product_id).then(({data}) => promiseAllRelated(data)).then((data) => {
//     let arr = [];
//     for(let i = 0; i < data.length; i++) {
//       arr[i * 3] = data[i][0].data;
//       arr[i * 3 + 1] = data[i][1].data;
//       arr[i * 3 + 2] = data[i][2].data;
//     }
//     resObj = filterRelated(arr);
//     res.status(201).send(resObj);
//   }).catch((err) => {
//     console.log(err);
//     res.status(404).send(err);
//   });
// });

app.get('/related', (req, res) => {
  const product_id = req.query.id;
  getRelated(product_id).then(({data}) => promiseAllRelated(data)).then((data) => {
    resObj = filterRelated(data);
    res.status(201).send(resObj);
  }).catch((err) => {
    console.log(err);
    res.status(404).send(err);
  });
});

app.get('/details', (req, res) => {
  const product_id = req.query.id;
  getDetails(product_id).then(({data}) => {
    res.status(201).send(data);
  }).catch((err) => {
    console.log(err);
    res.status(404).send(err);
  });
});

app.get('/overview', (req, res) => {
  const product_id = req.query.id;
  promiseAllOverview(product_id).then((data) => {
    const resObj = {};
    // if (data[0].status==='fulfilled') {
    //   resObj['reviews'] = data[0].value.data;
    // }
    // if (data[1].status ==='fulfilled') {
    //   resObj['styles'] = data[1].value.data;
    // }
    // if (data[2].status ==='fulfilled') {
    //   resObj['details'] = data[2].value.data;
    // }
    resObj['reviews'] = data[0].data;
    resObj['styles'] = data[1].data;
    resObj['details'] = data[2].data;
    res.status(201).send(resObj);
  }).catch((err) => {
    console.log(err);
    res.status(404).send(err);
  });
});

// Get review rating
app.get('/reviews', (req, res) => {
  const product_id = req.query.id;
  getReviews(product_id);
});

// Get styles for url
app.get('/styles', (req, res) => {
  const product_id = req.query.id;
  promiseAllRelated([product_id]).then((data) => {
    resObj = filterRelated(data);
    res.status(201).send(resObj);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
