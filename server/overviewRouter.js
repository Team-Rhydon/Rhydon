let controller = require('./overviewControllers/')
let overviewRouter = require('express').Router();

// connect controller methods to corresponding routes


// product route
overviewRouter.get('/products',  controller.getProduct)

// stars route
overviewRouter.get('/stars',  controller.getStars)

// styles route
overviewRouter.get('/styles',  controller.getStyles)

overviewRouter.get('/reviews', controller.getReviews)

module.exports = overviewRouter