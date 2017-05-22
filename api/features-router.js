var express = require('express');
var features = require('./modules/features');
var featuresRouter = express.Router();

featuresRouter.get('/', (req, res) => {
  res.send('features module root');
});

module.exports = featuresRouter;