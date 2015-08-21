// player Collection - player-collection.js
var PlayerCollection = require('ampersand-rest-collection');
var Player = require('./player');


module.exports = PlayerCollection.extend({
    model: Player,
    url: '/api/players'
});