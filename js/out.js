/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Hugger.js":
/*!**********************!*\
  !*** ./js/Hugger.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(function () {});\n\nvar Hugger = function Hugger() {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n};\n\nmodule.exports = Hugger;\n\n//# sourceURL=webpack:///./js/Hugger.js?");

/***/ }),

/***/ "./js/Predator.js":
/*!************************!*\
  !*** ./js/Predator.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(function () {});\n\nvar Predator = function Predator() {\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n};\n\nmodule.exports = Predator;\n\n//# sourceURL=webpack:///./js/Predator.js?");

/***/ }),

/***/ "./js/alien.js":
/*!*********************!*\
  !*** ./js/alien.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(function () {});\n\nvar Alien = function Alien() {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n};\n\nmodule.exports = Alien;\n\n//# sourceURL=webpack:///./js/alien.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(function () {\n\n    var startButton = document.querySelector('#start button');\n\n    startButton.addEventListener('click', function () {\n        var Game = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\n        var game = new Game();\n        game.showPredator();\n        game.showHugger();\n        game.showAlien();\n        game.gameStart();\n        startButton.parentElement.classList.add('invisible');\n\n        document.addEventListener('keydown', function (event) {\n            game.turnPredator(event);\n        });\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(function () {});\n\nvar Predator = __webpack_require__(/*! ./Predator.js */ \"./js/Predator.js\");\nvar Hugger = __webpack_require__(/*! ./Hugger.js */ \"./js/Hugger.js\");\nvar Alien = __webpack_require__(/*! ./alien.js */ \"./js/alien.js\");\nvar sounds = __webpack_require__(/*! ./sounds.js */ \"./js/sounds.js\");\n\nvar Game = function Game() {\n    this.board = document.querySelectorAll('#board > div');\n    this.Predator = new Predator();\n    this.Hugger = new Hugger();\n    this.alien = new Alien();\n\n    this.index = function (x, y) {\n        return x + y * 10;\n    };\n\n    this.showPredator = function () {\n        this.board[this.index(this.Predator.x, this.Predator.y)].classList.add('Predator');\n    };\n\n    this.showHugger = function () {\n        this.board[this.index(this.Hugger.x, this.Hugger.y)].classList.add('Hugger');\n    };\n\n    this.showAlien = function () {\n        this.board[this.index(this.alien.x, this.alien.y)].classList.add('alien');\n    };\n\n    this.movePredator = function () {\n        this.hideVisiblePredator();\n        if (this.Predator.direction === \"right\") {\n            this.Predator.x = this.Predator.x + 1;\n        } else if (this.Predator.direction === \"left\") {\n            this.Predator.x = this.Predator.x - 1;\n            //$('.Predator').css(\"background-image\", \"../images/predator-left.png\");\n        } else if (this.Predator.direction === \"up\") {\n            this.Predator.y = this.Predator.y + 1;\n        } else if (this.Predator.direction === \"down\") {\n            this.Predator.y = this.Predator.y - 1;\n        }\n\n        this.gameOver();\n        this.checkHuggerCollision();\n    };\n\n    this.hideVisiblePredator = function () {\n        document.querySelector('.Predator').classList.remove('Predator');\n    };\n\n    this.turnPredator = function (event) {\n        switch (event.which) {\n            case 37:\n                this.Predator.direction = 'left';\n                break;\n\n            case 38:\n                this.Predator.direction = \"down\";\n                break;\n\n            case 39:\n                this.Predator.direction = \"right\";\n                break;\n\n            case 40:\n                this.Predator.direction = \"up\";\n        }\n    };\n\n    this.checkHuggerCollision = function () {\n        if (this.Predator.x == this.Hugger.x && this.Predator.y == this.Hugger.y) {\n            document.querySelector('.Hugger').classList.remove('Hugger');\n            this.audio = document.getElementById('scored').play();\n            console.log(document.getElementById('scored'));\n            self.score = document.querySelector('#score strong');\n            score.textContent = parseInt(score.textContent) + 1;\n            this.Hugger = new Hugger();\n            this.showHugger();\n            this.alien = new Alien();\n            this.showAlien();\n        }\n    };\n\n    this.gameOver = function () {\n        if (this.Predator.x < 0 || this.Predator.x > 9 || this.Predator.y < 0 || this.Predator.y > 9 || this.Predator.y === this.alien.y && this.Predator.x === this.alien.x) {\n            document.getElementById('over').classList.remove('invisible');\n            clearInterval(this.idSetInterval);\n            document.getElementById('#alienmunch').play();\n        } else {\n            this.showPredator();\n        }\n    };\n\n    this.gameStart = function () {\n        var self = this;\n        this.idSetInterval = setInterval(function () {\n            self.movePredator();\n        }, 200);\n    };\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/sounds.js":
/*!**********************!*\
  !*** ./js/sounds.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//# sourceURL=webpack:///./js/sounds.js?");

/***/ })

/******/ });