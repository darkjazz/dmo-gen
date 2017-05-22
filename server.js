var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');

var app = module.exports = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 7747;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/dmo', require('./api/dmo-router'));
app.use('/features', require('./api/features-router'));
app.use('/musicbrainz', require('./api/musicbrainz-router'));

app.get('/', (req, res) => {
  res.send('DMO Server Root..')
});

app.listen(port, () => {
  console.log('DMO server listening on port '+port+'!')
});