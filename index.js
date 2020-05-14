var startPopulation = require('./pre_populate_redis');
var couchDB = require('./couchDBConnection');

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

startPopulation(function(results, client){
   console.log(results)
   
   let value = results.length;
   let i = 0;
   let bulks = [];
   while(true) {
     if(i + 50 > value) {
       let over = value % i;
       bulks.push(results.slice(i,i + over))
       break;
     } else {
        bulks.push(results.slice(i,i+49))
       i += 50;
     }
   }
   
   couchDB.createDatabase("moviedatabase").then(function () {
       bulks.forEach(function(bulk){
      couchDB.insert("moviedatabase", {bulk:bulk})
        })
    })
})
