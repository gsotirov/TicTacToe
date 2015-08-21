/* =============================
Main app file
================================ */

var app = require('ampersand-app');
var _ = require('lodash');
var config = require('clientconfig');
var Router = require('./router');
var MainView = require('./views/main');
var domReady = require('domready');
var Player = require('./models/player');
// var PlayerCollection = require('./models/player-collection');

// attach our app to `window` so we can
// easily access it from the console.
window.app = app;

// Extends our main app singleton.
app.extend({
    // Initialization of the Router that will handle the Page switch.
    router: new Router(),
    init: function() {
        // Creates and attaches the Main View
        this.mainView = new MainView({
            el: document.body
        });

        // this kicks off our backbutton tracking (browser history)
        // and will cause the first matching handler in the router
        // to fire.
        this.router.history.start({ pushState: true });
    },
    /* =================================================================
        This is a helper for navigating around the app. 
        This gets called by a global click handler 
        that handles all the <a> tags in the app. 
        It expects a url pathname, ex. '/page/play'. 
    ==================================================================== */
    navigate: function(page) {
        var url = (page.charAt(0) === '/') ? page.slice(1) : page;
        this.router.history.navigate(url, {
            trigger: true
        });
    },
    // Declares the Draw count, which will increment every time players draw.
    drawCount: 0,
    // Declares the two possible signs/marks('0' and 'X') as 0 and 1 for easier further use.
    MARK_ZERO: 0,
    MARK_CROSS: 1
});

// run it on domReady
domReady(_.bind(app.init, app));
