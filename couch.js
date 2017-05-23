var Couch = require('node-couchdb');
var config = require('./config');

var couchdb;
if (config.couch_host == "0.0.0.0") {
  couchdb = new Couch();
}
else {
  opts = {
    host: config.couch_host
  }
  if (config.couch_port != 5984) { opts['port'] = config.couch_port }
  if (config.user > "") {
    opts['auth'] = {
      user: config.user,
      pass: config.password
    }
  }
  couchdb = new Couch(opts);
}

module.exports = couchdb
