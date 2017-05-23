var express = require('express');
var dmo = require('./modules/dmo');
var dmoRouter = express.Router();

dmoRouter.get('/', function(req, res) {
  res.send('dmo module root')
});

module.exports = dmoRouter;