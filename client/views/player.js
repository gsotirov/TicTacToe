var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.includes.player,
    bindings: {
        'model.name': '[data-hook~=name]',
        'model.score': '[data-hook~=score]'
    },
    events: {
        'click [data-hook~=action-delete]': 'handleRemoveClick'
    },
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    }
});