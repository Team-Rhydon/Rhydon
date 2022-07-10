const express = require("express");
const router = express.Router();
const controllers = require("../controllers/reviewsControllers");
require("dotenv").config();
const axios = require("axios");
const models = require("../models/reviews.js");
axios.defaults.baseURL = process.env.BASE_URL;

axios.defaults.headers.common['Authorization'] = process.env.API_KEY;
//set up router middleware
router.use(function(req, res, next) {
  console.log(req)
  console.log(req.url, "@", Date.now());
  next();
});

//chain-able route handlers for different paths along reviews endpoint
router //params, definitely needs a product_id
  .route("/")
  .get(controllers.get.reviews)
  .post(controllers.post.review);

  //meta route contains info on star ratings, product breakdown, and #of recommendations
router //params of a product_id
  .route("/meta")
  .get(controllers.get.metaData);

router //params are review_id --> marks review as helpful(unlimited?)
  .route("/:review_id/helpful")
  .put(controllers.put.helpful);

router //requires review_id --> marks a review as reported and won't be returned by GET requests
  .route("/:review_id/report")
  .put(controllers.put.report);

module.exports = router;