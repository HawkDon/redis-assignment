var redis = require("redis");
var converter = require("./csv_converter");
var client = redis.createClient();
/*
client.on("error", function (error) {
  console.error(error);
  console.error("No docker container with redis on port: 6379");
});*/

// Start population
function startPopulation(cb){
client.on("error", function (error) {
  console.error(error);
  console.error("No docker container with redis on port: 6379");
});

  converter.then((results) => {
    var result = results.map(function(x){return ["hmset", "title:" + x.original_title, x]})
    client.multi(result).exec(function(error,result){cb(results, client)});
  });  
}

module.exports = startPopulation;

