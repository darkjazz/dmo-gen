var express = require('express');
var musicbrainz = require('./modules/musicbrainz');
var musicbrainzRouter = express.Router();

musicbrainzRouter.get('/', (req, res) => {
  res.send('MusicBrainz module root')
});

musicbrainzRouter.get('/artist_search/:searchTerm', (req, res) => {
  var searchTerm = req.params.searchTerm;
  mb.artist_search(searchTerm, artists => {
    res.send(artists);
  });
});

module.exports = musicbrainzRouter;