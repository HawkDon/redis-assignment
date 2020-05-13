var redis = require("redis");
var converter = require("./csv_converter");
var client = redis.createClient();

client.on("error", function (error) {
  console.error(error);
  console.error("No docker container with redis on port: 6379");
});

// Start population
converter.then((results) => {
  results.forEach((result) => {
    client.hmget("title:" + result.original_title, result);
  });
});

module.exports = client;
