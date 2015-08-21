var PageView = require('./base');
var templates = require('../templates');
var PlayerView = require('../views/player');

module.exports = PageView.extend({
    pageTitle: 'Leaderboard',
    autoRender: true,
    template: templates.pages.leaderboard,
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, PlayerView, this.queryByHook('players-list'));
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    },
});