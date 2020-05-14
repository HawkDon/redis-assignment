var couch = require("./couchDBConnection");
var client = require("./pre_populate_redis");
/*
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

loadCouchDBData.then(function (results) {
  couch.createDatabase("moviedatabase").then(function () {
    asyncForEach(results, async function (result) {
      await couch
        .insert("moviedatabase", {
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
        })
        .catch(function (error) {});
    });
  });
});
*/
// Populate couch from redis
couch.createDatabase("moviedatabase").then(function () {
  client.keys("title:*", function (error, titleKeys) {
    titleKeys.forEach(function (titleKey) {
      console.log(titleKey);
      /*
      var resultFromKey = titleKey.substring(7);
      couch.insert("moviedatabase", {
        id: result.id,
        title: result.title,
        budget: result.budget, Movie
        genres: result.genres, Genre
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
      */
    });
  });
});
