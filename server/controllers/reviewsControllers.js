//import models
const axios = require("axios")
const models = require("../models/reviews.js");

// define exports
module.exports = {};

module.exports.get = {
  reviews: (req, res) => {
    models.getReviews(req.query)
      .then(response=> res.status(200).json(response))
      .catch(err => res.statusStatus(500))
  },

  metaData: (req, res) => {
    models.getReviewMeta(req.query)
      .then(response=> res.status(200).json(response))
      .catch(err => res.statusStatus(500))
  }
}

module.exports.post = {
  review: (req, res) => {
    models.postReview(req.query, req.body)
      .then(response=> res.status(201).send('Successful Post!'))
      .catch(err => res.statusStatus(500))
  }
}

module.exports.put = {
  helpful: (req, res) => {
    models.putHelpful(req.query)
      .then(()=> res.sendStatus(204))
      .catch(()=> res.sendStatus(500))
  },

  report: (req, res) => {
    models.putHelpful(req.query)
      .then(()=> res.sendStatus(204))
      .catch(()=> res.sendStatus(500))
  }
}