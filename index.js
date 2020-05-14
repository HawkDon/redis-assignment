var startPopulation = require('./pre_populate_redis');
var couchDB = require('./couchDBConnection');

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

startPopulation(function(results, client){
   console.log(results)
   
   let value = 4803;
   let i = 0;
   let bulks = [];
   while(true) {
     if(i > value) {
       let over = i % value;
       console.log(over)
       bulks[bulks.length - 1] = i - over
       break;
     }
   
     bulks.push(i+49)
     i += 50; 
   }
   console.log(bulks)

   couchDB.createDatabase("moviedatabase").then(function () {
      asyncForEach(results, async function (result) {
       await couchDB.insert("moviedatabase", {
            id: result.id,
            title: result.title,
            budget: result.budget,
            genres: result.genres,
            homepage: result.homepage,
            keywords: result.keywords,
            original_language: result.original_language,
            original_title: result.original_title,
            overview: result.overview,
            popularity: result.popularity,
            production_companies: result.production_companies,
            production_countries: result.production_countries,
            release_date: result.release_date,
            revenue: result.revenue,
            runtime: result.runtime,
            spoken_languages: result.spoken_languages,
            status: result.status,
            tagline: result.tagline,
            vote_average: result.vote_average,
            vote_count: result.vote_count,
          });
        })
    })
})
