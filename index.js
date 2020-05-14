var populateDBS = require("./populate_neo4j");
var EventEmitter = require("events");
var util = require("util");
/*
class Eventer extends EventEmitter {
  updateRedis = function () {
    this.emit("redis");
  };

  updateNeo4j = function () {
    this.emit("neo4j");
  };
}

var eventer = new Eventer();
// Redis listener
eventer.on("redis", function () {});

eventer.boom();
// populateCouchDB();
*/
populateDBS();
