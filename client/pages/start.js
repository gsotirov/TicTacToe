/* ===================================
Start page
====================================== */

var PageView = require('./base');
var templates = require('../templates');
var PlayerForm = require('../forms/playerForm.js');
var PlayerCollection = require('../models/player-collection');
var Player = require('../models/player');

/* ===================================
Extends the base view.
    - Sets the page title
    - Renders the Player name form
    
On form submit, adds Player 1 and 
Player 2 to the main app object 
for later reference, then redirects 
to the Play Page.
====================================== */
module.exports = PageView.extend({
    pageTitle: 'Start',
    autoRender: true,
    template: templates.pages.start,
    render: function () {
        
        this.renderWithTemplate();
        
        this.form = new PlayerForm({
            data: {
                player0: '',
                player1: ''
            },
            el: this.el,
            submitCallback: function (data) {
                
                var players = new PlayerCollection();
                
                players.add(new Player({
                    name: data.player0,
                    mark: app.marks[0],
                    score: 0
                }));
                
                players.add(new Player({
                    name: data.player1,
                    mark: app.marks[1],
                    score: 0
                }));
                
                app.drawCount = 0;
                app.players = players;
                app.router.redirectTo('play');
            }
        });
    }
});
