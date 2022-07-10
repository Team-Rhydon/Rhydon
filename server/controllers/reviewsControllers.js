//import models
const models = require("../models/reviews.js");
// define exports
module.exports = {
  get: {
    reviews: (req, res) => {
      console.log('this is the controller');
      models.getReviews(req.query)
        .then(response=> {console.log(response);res.status(200).send(JSON.stringify(response.data))})
        .catch(err => {console.log(err);res.sendStatus(500)})
    },

    metaData: (req, res) => {
      console.log(req.query)
      models.getReviewMeta(req.query)
        .then(response=> res.status(200).json(response.data))
        .catch(err => {console.log(err); res.sendStatus(500)})
    }
  },
  post: {
    review: (req, res) => {
      models.postReview(req.query, req.body)
        .then(response=> res.status(201).send('Successful Post!'))
        .catch(err => res.statusStatus(500))
    }
  },

  put: {
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


}
