var Couch = require('node-couchdb');
var config = require('./config');

var couchdb;

var host = process.env.COUCH_HOST || config.couch_host || "0.0.0.0";
var port = process.env.COUCH_PORT || config.couch_port || 5984;
var user = process.env.COUCH_USER || config.user || undefined;
var pass = process.env.COUCH_PASS || config.password || undefined;

if (host == "0.0.0.0") {
  couchdb = new Couch();
}
else {
  opts = {
    host: host
  };
  if (port) { opts.port = port }
  if (user) {
    opts.auth = {
      user: user,
      pass: pass
    }
  }
  couchdb = new Couch(opts);
}

module.exports = couchdb
