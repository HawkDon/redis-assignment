const NodeCouchDb = require("node-couchdb");

const couch = new NodeCouchDb({
  host: "localhost",
  protocol: "http",
  port: 5984,
  auth: {
    user: "admin",
    pass: "password",
  },
});

module.exports = couch;
