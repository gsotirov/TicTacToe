var PlayerModel = require('ampersand-model');


module.exports = PlayerModel.extend({ 
    props: { 
        name: ['string'],
        mark: ['number'],
        score: ['number']
    } 
});