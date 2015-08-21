var _ = require('lodash');

var players = [];

exports.list = function (req, res) {
    res.send(players);
};

exports.add = function (req, res) {
    var player = req.body;
    players.push(player);
    res.status(201).send(player);
};