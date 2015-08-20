/* ===================================
Start page Player names input form...
====================================== */

var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var templates = require('../templates');
var ExtendedInput = InputView.extend({
    template: templates.includes.formInput()
});


/* ====================================
Extends the main FormView with 
fields for the players names input...
======================================= */
module.exports = FormView.extend({
    fields: function () {
        var fields = [];
        for(var i = 0; i <= 1; i++) {
            fields.push(new ExtendedInput({
                name: 'player' + i,
                value: this.data['player' + i] || '',
                required: true,
                placeholder: 'Player ' + (i + 1) + '\'s name here',
                parent: this
            }));
        }
        return fields;
    }
});
