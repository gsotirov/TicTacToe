var PageView = require('./base');
var templates = require('../templates');
var PlayerForm = require('../forms/playerForm.js');
var PlayerCollection = require('../models/player-collection.js');
var Player = require('../models/player.js');


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
                    mark: app.MARK_ZERO,
                    score: 0
                }));
                
                players.add(new Player({
                    name: data.player1,
                    mark: app.MARK_CROSS,
                    score: 0
                }));
                
                app.drawCount = 0;
                app.players = players;
                app.router.redirectTo('play');
            }
        });
    }
});
