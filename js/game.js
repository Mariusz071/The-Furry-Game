
var Furry = require('./furry.js');
var Coin = require('./coin.js');

var Game = function () {
    this.board = document.querySelectorAll('#board > div');
    this.furry = new Furry();
    this.coin = new Coin();

    this.index = function (x, y) {
        return x + (y * 10);
    };

    this.showFurry = function () {
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    };

    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };



    this.moveFurry = function () {
        this.hideVisibleFurry();
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y + 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y - 1;
        }

        this.gameOver();
        this.checkCoinCollision();
    };


    this.hideVisibleFurry = function () {
        document.querySelector('.furry').classList.remove('furry');
    };

    this.turnFurry = function (event) {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;

            case 38:
                this.furry.direction = "down";
                break;

            case 39:
                this.furry.direction = "right";
                break;

            case 40:
                this.furry.direction = "up";
        }
    };

    this.checkCoinCollision = function () {

        if (this.furry.x == this.coin.x && this.furry.y == this.coin.y) {
            document.querySelector('.coin').classList.remove('coin');
            self.score = document.querySelector('#score strong');
            score.textContent = parseInt(score.textContent) + 1;
            this.coin = new Coin();
            this.showCoin();
        }
    };

    this.gameOver = function () {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            // alert('Game over');
            clearInterval(this.idSetInterval);
            console.log('game over');
        } else {
            this.showFurry();
        }
    };

    this.gameStart = function () {
        var self = this;
        this.idSetInterval = setInterval(function() {
            self.moveFurry();
        }, 200);
    }
};

module.exports = Game;




