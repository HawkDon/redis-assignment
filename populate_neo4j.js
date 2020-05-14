var neo4j = require("neo4j-driver");
var populateCouchDB = require("./populate_couch_db");
/*
var driver = neo4j.driver(
  "localhost:5984",
  neo4j.auth.basic("admin", "password")
);
*/

const mangoQuery = {
  selector: {
    _id: {
      $gt: null,
    },
  },
};
/*
var neo4jClient = driver.session();
*/
function populateDBS() {
  populateCouchDB(function (couchDB) {
    couchDB.get("memes", mangoQuery).then(function (data) {
      console.log(data);
    });
  });
}

module.exports = populateDBS;
