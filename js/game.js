$(function () {

});

var Predator = require('./Predator.js');
var Hugger = require('./Hugger.js');
var Alien = require('./alien.js');
var sounds = require('./sounds.js')

var Game = function () {
    this.board = document.querySelectorAll('#board > div');
    this.Predator = new Predator();
    this.Hugger = new Hugger();
    this.alien = new Alien();

    this.index = function (x, y) {
        return x + (y * 10);
    };

    this.showPredator = function () {
        this.board[this.index(this.Predator.x, this.Predator.y)].classList.add('Predator');
    };

    this.showHugger = function () {
        this.board[this.index(this.Hugger.x, this.Hugger.y)].classList.add('Hugger');
    };

    this.showAlien = function () {
        this.board[this.index(this.alien.x, this.alien.y)].classList.add('alien');
    }



    this.movePredator = function () {
        this.hideVisiblePredator();
        if (this.Predator.direction === "right") {
            this.Predator.x = this.Predator.x + 1;
        } else if (this.Predator.direction === "left") {
            this.Predator.x = this.Predator.x - 1;
            //$('.Predator').css("background-image", "../images/predator-left.png");
        } else if (this.Predator.direction === "up") {
            this.Predator.y = this.Predator.y + 1;
        } else if (this.Predator.direction === "down") {
            this.Predator.y = this.Predator.y - 1;
        }

        this.gameOver();
        this.checkHuggerCollision();
    };


    this.hideVisiblePredator = function () {
        document.querySelector('.Predator').classList.remove('Predator');
    };

    this.turnPredator = function (event) {
        switch (event.which) {
            case 37:
                this.Predator.direction = 'left';
                break;

            case 38:
                this.Predator.direction = "down";
                break;

            case 39:
                this.Predator.direction = "right";
                break;

            case 40:
                this.Predator.direction = "up";
        }
    };

    this.checkHuggerCollision = function () {
        if (this.Predator.x == this.Hugger.x && this.Predator.y == this.Hugger.y) {
            document.querySelector('.Hugger').classList.remove('Hugger');
            this.audio = document.getElementById('scored').play();
            console.log(document.getElementById('scored'));
            self.score = document.querySelector('#score strong');
            score.textContent = parseInt(score.textContent) + 1;
            this.Hugger = new Hugger();
            this.showHugger();
            this.alien = new Alien();
            this.showAlien();
        }
    };


    this.gameOver = function () {
        if (this.Predator.x < 0 || this.Predator.x > 9 || this.Predator.y < 0 || this.Predator.y > 9 || this.Predator.y === this.alien.y
        && this.Predator.x === this.alien.x) {
            document.getElementById('over').classList.remove('invisible');
            clearInterval(this.idSetInterval);
            document.getElementById('#alienmunch').play();

        } else {
            this.showPredator();
        }
    };

    this.gameStart = function () {
        var self = this;
        this.idSetInterval = setInterval(function() {
            self.movePredator();
        }, 200);
    }
};

module.exports = Game;




