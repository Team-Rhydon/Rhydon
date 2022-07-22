const models = require('../models/reviews.js');

module.exports = {
  get: {
    reviews: (req, res) => {
      models.getReviews(req.query)
          .then((response)=> {
            res.status(200).send(JSON.stringify(response.data));
          })
          .catch((err) => {
            console.log(err); res.sendStatus(500);
          });
    },

    metaData: (req, res) => {
      models.getReviewMeta(req.query)
          .then((response)=> res.status(200).json(response.data))
          .catch((err) => {
            console.log(err); res.sendStatus(500);
          });
    },
  },
  post: {
    review: (req, res) => {
      models.postReview(req.body)
          .then(()=> res.status(201).send('Successful Post!'))
          .catch((err) => {
            console.log(err); res.sendStatus(500);
          });
    },
  },

  put: {
    helpful: (req, res) => {
      models.putHelpful(req.body.review_id)
          .then(()=> res.sendStatus(204))
          .catch(()=> res.sendStatus(500));
    },

    report: (req, res) => {
      models.putReport(req.body.review_id)
          .then(()=> res.sendStatus(204))
          .catch(()=> res.sendStatus(500));
    },
  },
};
