var neo4jclient = require('');

function feedBandToRedis(band) { redisClient.set('band-name:' + band.name, 1); 
band.artists.forEach(function(artist) { redisClient.set('artist-name:' + artist.name, 1); 
artist.role.forEach(function(role){ redisClient.set('role-name:' + role, 1);

function feedBandToNeo4j(band, progress) { var lookup = neo4jClient.lookupOrCreateNode, relate = neo4jClient.createRelationship;
    lookup('bands', 'name', band.name, function(bandNode) { progress.emit('progress', 'band'); band.artists.forEach(function(artist) { lookup('artists', 'name', artist.name, function(artistNode){ progress.emit('progress', 'artist'); relate(bandNode.self, artistNode.self, 'member', function(){ progress.emit('progress', 'member'); }); artist.role.forEach(function(role){ lookup('roles', 'role', role, function(roleNode){ progress.emit('progress', 'role'); 
    relate(artistNode.self, roleNode.self, 'plays', function(){ progress.emit('progress', 'plays')};