var startPopulation = require("./pre_populate_redis");
var couchDB = require("./couchDBConnection");

function populateCouchDB(cb) {
  startPopulation(function (results) {
    let value = results.length;
    let i = 0;
    let bulks = [];
    while (true) {
      if (i + 50 > value) {
        let over = value % i;
        bulks.push(results.slice(i, i + over));
        break;
      } else {
        bulks.push(results.slice(i, i + 49));
        i += 50;
      }
    }

    couchDB.createDatabase("moviedatabase").then(function () {
      var promises = [];
      bulks.forEach(function (bulk) {
        promises.push(couchDB.insert("moviedatabase", { bulk: bulk }));
      });

      Promise.all(promises).then(function () {
        cb(couchDB);
      });
    });
  });
}

module.exports = populateCouchDB;
