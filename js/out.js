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

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Game = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\n\nvar game = new Game();\ngame.showFurry();\ngame.showCoin();\ngame.gameStart();\n\n\ndocument.addEventListener('keydown', function (event) {\n    game.turnFurry(event);\n});\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Coin = function  () {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n};\n\nmodule.exports = Coin;\n\n//# sourceURL=webpack:///./js/coin.js?");

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Furry = function () {\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n};\n\nmodule.exports = Furry;\n\n//# sourceURL=webpack:///./js/furry.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar Furry = __webpack_require__(/*! ./furry.js */ \"./js/furry.js\");\nvar Coin = __webpack_require__(/*! ./coin.js */ \"./js/coin.js\");\n\nvar Game = function () {\n    this.board = document.querySelectorAll('#board > div');\n    this.furry = new Furry();\n    this.coin = new Coin();\n\n    this.index = function (x, y) {\n        return x + (y * 10);\n    };\n\n    this.showFurry = function () {\n        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n    };\n\n    this.showCoin = function () {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');\n    };\n\n\n\n    this.moveFurry = function () {\n        this.hideVisibleFurry();\n        if (this.furry.direction === \"right\") {\n            this.furry.x = this.furry.x + 1;\n        } else if (this.furry.direction === \"left\") {\n            this.furry.x = this.furry.x - 1;\n        } else if (this.furry.direction === \"up\") {\n            this.furry.y = this.furry.y + 1;\n        } else if (this.furry.direction === \"down\") {\n            this.furry.y = this.furry.y - 1;\n        }\n\n        this.gameOver();\n        this.checkCoinCollision();\n    };\n\n\n    this.hideVisibleFurry = function () {\n        document.querySelector('.furry').classList.remove('furry');\n    };\n\n    this.turnFurry = function (event) {\n        switch (event.which) {\n            case 37:\n                this.furry.direction = 'left';\n                break;\n\n            case 38:\n                this.furry.direction = \"down\";\n                break;\n\n            case 39:\n                this.furry.direction = \"right\";\n                break;\n\n            case 40:\n                this.furry.direction = \"up\";\n        }\n    };\n\n    this.checkCoinCollision = function () {\n\n        if (this.furry.x == this.coin.x && this.furry.y == this.coin.y) {\n            document.querySelector('.coin').classList.remove('coin');\n            self.score = document.querySelector('#score strong');\n            score.textContent = parseInt(score.textContent) + 1;\n            this.coin = new Coin();\n            this.showCoin();\n        }\n    };\n\n    this.gameOver = function () {\n        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {\n            // alert('Game over');\n            clearInterval(this.idSetInterval);\n            console.log('game over');\n        } else {\n            this.showFurry();\n        }\n    };\n\n    this.gameStart = function () {\n        var self = this;\n        this.idSetInterval = setInterval(function() {\n            self.moveFurry();\n        }, 200);\n    }\n};\n\nmodule.exports = Game;\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ })

/******/ });