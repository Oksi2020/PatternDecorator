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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import hirePeople from '../classWork/task1';\n// let body = document.querySelector('body');\n// body.addEventListener('click', hirePeople);\n// console.log(peopleArray);\n//----------------------------------task2----------------------------------------------\ndocument.addEventListener('DOMContentLoaded', function () {\n  var lights = document.querySelectorAll('.trafficLight');\n  var wrap = document.querySelector('.wrap');\n  var butStartNight = document.querySelector('#Do');\n  var check = true;\n  var night = new CustomEvent('night');\n  var start = new CustomEvent('start');\n  var stop = new CustomEvent('stop');\n\n  var absolutelyNight = function absolutelyNight() {\n    var _loop = function _loop(i) {\n      if (lights[i].classList.contains('red')) {\n        lights[i].classList.remove('red');\n      }\n\n      if (lights[i].classList.contains('green')) {\n        lights[i].classList.remove('green');\n      }\n\n      if (!lights[i].classList.contains('interval')) {\n        lights[i].classList.add('interval');\n      }\n\n      if (check) {\n        if (lights[i].classList.contains('interval')) {\n          setInterval(function () {\n            return lights[i].classList.toggle('yellow');\n          }, 1000);\n        }\n      }\n    };\n\n    for (var i = 0; i < lights.length; i++) {\n      _loop(i);\n    }\n\n    check = false;\n  };\n\n  window.addEventListener('load', function () {\n    absolutelyNight();\n  });\n  butStartNight.addEventListener('click', function () {\n    absolutelyNight();\n  });\n  lights.forEach(function (item) {\n    item.addEventListener('click', function () {\n      console.log('click');\n\n      if (item.classList.contains('interval')) {\n        item.dispatchEvent(stop);\n      } else if (item.classList.contains('red')) {\n        item.dispatchEvent(start);\n      } else if (item.classList.contains('green')) {\n        item.dispatchEvent(night);\n      }\n    });\n    item.addEventListener('start', function () {\n      item.classList.add('green');\n      item.classList.remove('red');\n    });\n    item.addEventListener('stop', function () {\n      item.classList.add('red');\n      item.classList.remove('interval');\n    });\n    item.addEventListener('night', function () {\n      item.classList.add('interval');\n      item.classList.remove('green');\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });