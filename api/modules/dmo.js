var uuidV4 = require('uuid/v4');

const dbName = "musicbrainz_artists"; //"dmo_db";

const URI_BASE = "http://semanticaudio.ac.uk/dmo/"

module.exports.create_uri = function() {
  return URI_BASE + uuidV4();
}

module.exports.get_artist_yago = function(id, db, cb) {
  console.log("getting artist" + id);
  db.get(dbName, id).then(( get_res ) => {
    var artist_json = get_res.data;
    cb(artist_json);
  }, err => {
    if (err.code == "EDOCMISSING") {
      cb({ error: "NOT FOUND" });
    }
    else {
      cb({ error: err });
    }
  });
}
