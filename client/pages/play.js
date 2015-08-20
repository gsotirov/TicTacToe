/* ======================================
Play page - handles the playground :)
========================================= */

var PageView = require('./base');
var templates = require('../templates');

/* ======================================
Extends the Main view and creates 
methods for handling the playground.
========================================= */
module.exports = PageView.extend({
    pageTitle: 'Play',
    template: templates.pages.play,
    // Sets an initial value for the activePlayer. It changes depending on which player's turn is.
    activePlayer: 0,
    // Counts the moves made, so Draw can be handled properly.
    moveCount: 0,
    
    // Attaches events to the gameField for setting a sign on player click and for starting a NewGame.
    events: {
        'click #game-field .game-cell.is-empty' : 'setSign',
        'click #newGame' : 'newGame'
    },
    
    render: function () {
        
        this.isGameComplete = false;
        this.player0 = app.players.at(0);
        this.player1 = app.players.at(1);
        this.marks = {
            0: app.MARK_ZERO,
            1: app.MARK_CROSS
        };
        this.drawCount = app.drawCount;
        this.message = 'It\'s ' + app.players.at(this.activePlayer).name + '\'s turn!';
        this.messageClass = 'alert-info';
        
        this.gameField = {};
        
        for(var x = 0; x <= 2; x++) {
            this.gameField[x] = {};
            for(var y = 0; y <= 2; y++) {
                this.gameField[x][y] = null;
            }
        }
        this.renderWithTemplate(this);
        this.gameFieldElem = this.el.querySelector('#gameField');
        
        return this;
    },
    props: {
        message: ['string'],
        messageClass: ['string'],
        isGameComplete: ['boolean']
    },
    bindings: {
        message: {
            type: 'text',
            hook: 'message'
        },
        messageClass: {
            type: 'class',
            hook: 'message',
        },
        isGameComplete: {
            type: 'toggle',
            selector: '#newGame'
        }
    },
    setSign: function (ev) {
        
        var self = this;
        if(self.isGameComplete) {
            return;
        }
        
        ev.target.classList.remove('is-empty');
        ev.target.classList.add('sign-' + this.marks[this.activePlayer]);
        
        var coordinates = ev.target.dataset;
        
        //console.log(coordinates);
        
        var xPos = coordinates['xpos'],
            yPos = coordinates['ypos'];
        
        self.gameField[yPos][xPos] = self.activePlayer;
        
        //console.log(this.gameField[xPos][yPos]);
        
        var gameEnded = this.checkForWinner(xPos, yPos);
        
        if(!gameEnded) {
            this.activePlayer = this.activePlayer ? 0 : 1;
            this.message = 'It\'s ' + app.players.at(this.activePlayer).name + '\'s turn!';
        }
        
    },
    newGame: function () {
        
        this.activePlayer = 0;
        this.moveCount = 0;
        
        this.render();
        
    },
    checkForWinner: function (x, y) {
        
        var self = this;
        var size = 3;
        this.moveCount++;
        
        var winningRow = (function (xPos, yPos) {
            for(var i = 0; i < size; i++) {
                if(self.gameField[yPos][i] !== self.activePlayer) {
                    break;
                }
                if(i === (size - 1)) {
                    return true;
                }
            }
            return false;
        })(x, y);
        
        var winningCol = (function (xPos, yPos) {
            for(var i = 0; i < size; i++) {
                if(self.gameField[i][x] !== self.activePlayer) {
                    break;
                }
                if(i === (size - 1)) {
                    return true;
                }
            }
            return false;
        })(x, y);
        
        var winningDiag = (function (xPos, yPos) {
            for(var i = 0; i < size; i++) {
                if(self.gameField[i][i] !== self.activePlayer) {
                    break;
                }
                if(i === (size - 1)) {
                    return true;
                }
            }
            return false;
        })(x, y);
        
        var winningRevDiag = (function (xPos, yPos) {
            for(var i = 0; i < size; i++) {
                var j = size - i - 1;
                if(self.gameField[j][i] !== self.activePlayer) {
                    break;
                }
                if(i === (size - 1)) {
                    return true;
                }
            }
            return false;
        })(x, y);
        
        var win = winningCol || winningRow || winningDiag || winningRevDiag;
        var draw = this.moveCount === 9 && !win;
        
        if(win) {
            this.handleWin(self.activePlayer);
            return true;
        }
        if(draw) {
            this.handleDraw();
            return true;
        }
        return false;
    },
    handleWin: function (ap) {
        
        this.isGameComplete = true;
        
        var player = app.players.at(ap);
        player.score++;
        
        var scoreBoard = this.queryByHook('score-player' + ap);
        scoreBoard.innerText = player.score;
        
        this.message = 'Player ' + player.name + ' wins!';
        this.messageClass = 'alert-success';
    },
    handleDraw: function () {
        this.isGameComplete = true;
        app.drawCount++;
        this.drawCount = app.drawCount;
        
        var scoreBoard = this.queryByHook('draw-count');
        scoreBoard.innerText = this.drawCount;
        
        this.message = 'No winner! The game is a tie';
    }
});
