require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const controllers = require('./controllers.js');
const reviewRouter = require('./routes/reviews.js');

let {getReviews, getStyles, getRelated, getDetails} = controllers;

// Setup Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));


// Creates base url for API
axios.defaults.baseURL = process.env.BASE_URL;

// Adds API key to all requests
axios.defaults.headers.common['Authorization'] = process.env.API_KEY;

// Setup Routes
app.use('/reviews', reviewRouter);
// Get related items
app.get('/related', (req, res) => {
  let product_id = req.query.id;
  getRelated(product_id).then(({data}) => {
    // initialize array of promises
    let reqArr = [];
    // for each related item, return a promise for reviews and styles
    data.forEach((id) => {
      reqArr.push(getReviews(id));
      reqArr.push(getStyles(id));
      reqArr.push(getDetails(id));
    });
    return Promise.all(reqArr);
  }).then((data) => {
    debugger;
  }).catch((err) => {
    res.status(404).send(err);
  });
});

// Get review rating
app.get('/reviews', (req, res) => {
  let product_id = req.query.id;
  getReviews(product_id);
});

// Get styles for url
app.get('/styles', (req, res) => {
  let product_id = req.query.id;
  getStyles(product_id);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
