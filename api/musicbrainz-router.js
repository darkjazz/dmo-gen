var express = require('express');
var musicbrainz = require('./modules/musicbrainz');
var musicbrainzRouter = express.Router();

musicbrainzRouter.get('/', function(req, res) {
  res.send('MusicBrainz module root')
});

musicbrainzRouter.get('/artist_search/:searchTerm', function(req, res) {
  var searchTerm = req.params.searchTerm;
  mb.artist_search(searchTerm, function(artists) {
    res.send(artists);
  });
});

module.exports = musicbrainzRouter;