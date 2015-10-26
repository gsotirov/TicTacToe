var PlayerModel = require('ampersand-model');


module.exports = PlayerModel.extend({ 
    props: { 
        name: ['string'],
        mark: ['string'],
        score: ['number']
    } 
});