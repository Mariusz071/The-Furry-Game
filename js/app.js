$(function () {

    var startButton = document.querySelector('#start button');

    startButton.addEventListener('click', function () {
        var Game = require('./game.js');
        var game = new Game();
        game.showPredator();
        game.showHugger();
        game.showAlien();
        game.gameStart();
        startButton.parentElement.classList.add('invisible');


        document.addEventListener('keydown', function (event) {
            game.turnPredator(event);
        });
    })
});