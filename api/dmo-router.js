var express = require('express');
var dmo = require('./modules/dmo');
var dmoRouter = express.Router();

dmoRouter.get('/', function(req, res) {
  res.send('dmo module root')
});

dmoRouter.get('/create_uri', function(req, res) {
  res.send(dmo.create_uri())
});

dmoRouter.get('/artist/:id', function (req, res) {
  var id = req.params.id;
  dmo.get_artist_yago(id, req.app.locals.couchdb, function(artist) {
    res.send(artist);
  })
});

module.exports = dmoRouter;
