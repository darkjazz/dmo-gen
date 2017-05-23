var CouchDB = require('node-couchdb');
var uuidV4 = require('uuid/v4');

const dbName = "dmo_db";
const couch = new CouchDB();

const URI_BASE = "http://semanticaudio.ac.uk/dmo/"

module.exports.create_uri = function() {
  return URI_BASE + uuidV4();
}
