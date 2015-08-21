var app = require('ampersand-app');
var Router = require('ampersand-router');
var StartPage = require('./pages/start');
var PlayPage = require('./pages/play');
var LeaderBoardPage = require('./pages/leaderboard');


module.exports = Router.extend({
    routes: {
        '': 'start',
        'play': 'play',
        'leaderboard': 'leaderboard',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    start: function () {
        app.trigger('page', new StartPage());
    },

    play: function () {
        
        if(typeof app.players === 'undefined') {
            
            app.router.redirectTo('start');
            return;
        }
        app.trigger('page', new PlayPage());
    },
    
    /*leaderboard: function () {
        app.trigger('page', new LeaderBoardPage({
            collection: app.players,
            model: app.player
        }));
    },*/

    catchAll: function () {
        this.redirectTo('');
    }
});
