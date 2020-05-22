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

/***/ "./classWork/task1.js":
/*!****************************!*\
  !*** ./classWork/task1.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar peopleArray;\nvar url = 'http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2';\nvar body = document.querySelector('body');\nvar hiredPeoples = [];\n\nvar getPeoples = function getPeoples(url) {\n  fetch(url).then(function (responce) {\n    return responce.json();\n  }).then(function (data) {\n    peopleArray = data;\n    return data;\n  }).then(function () {\n    for (var i = 0; i < peopleArray.length; i++) {\n      body.innerHTML += \"\\n          <div><img src = \".concat(peopleArray[i].picture, \">\\n            <h1>\").concat(peopleArray[i].name, \"</h1>\\n            <p>Type: \").concat(peopleArray[i].type, \"</p>\\n          </div>\\n          <input type=\\\"button\\\" class='hire' value='Hire this person' data-toggle = '\").concat(peopleArray[i].name, \"'>\\n          <hr>\");\n    }\n  });\n};\n\ngetPeoples(url);\n\nvar Peoples = function Peoples(_ref) {\n  var name = _ref.name,\n      picture = _ref.picture,\n      type = _ref.type,\n      gender = _ref.gender,\n      _id = _ref._id;\n\n  _classCallCheck(this, Peoples);\n\n  this.name = name;\n  this.picture = picture;\n  this.type = type;\n  this.gender = gender;\n  this._id = _id;\n};\n\nvar Backend = /*#__PURE__*/function (_Peoples) {\n  _inherits(Backend, _Peoples);\n\n  var _super = _createSuper(Backend);\n\n  function Backend() {\n    _classCallCheck(this, Backend);\n\n    return _super.apply(this, arguments);\n  }\n\n  return Backend;\n}(Peoples);\n\nvar Frontend = /*#__PURE__*/function (_Peoples2) {\n  _inherits(Frontend, _Peoples2);\n\n  var _super2 = _createSuper(Frontend);\n\n  function Frontend() {\n    _classCallCheck(this, Frontend);\n\n    return _super2.apply(this, arguments);\n  }\n\n  return Frontend;\n}(Peoples);\n\nvar Project = /*#__PURE__*/function (_Peoples3) {\n  _inherits(Project, _Peoples3);\n\n  var _super3 = _createSuper(Project);\n\n  function Project() {\n    _classCallCheck(this, Project);\n\n    return _super3.apply(this, arguments);\n  }\n\n  return Project;\n}(Peoples);\n\nvar Design = /*#__PURE__*/function (_Peoples4) {\n  _inherits(Design, _Peoples4);\n\n  var _super4 = _createSuper(Design);\n\n  function Design() {\n    _classCallCheck(this, Design);\n\n    return _super4.apply(this, arguments);\n  }\n\n  return Design;\n}(Peoples);\n\nvar HeadHunt = function HeadHunt(obj) {\n  var personClass = null;\n\n  if (obj.type === 'backend') {\n    personClass = Backend;\n  } else if (obj.type === 'frontend') {\n    personClass = Frontend;\n  } else if (obj.type === 'project') {\n    personClass = Project;\n  } else if (obj.type === 'design') {\n    personClass = Design;\n  } else {\n    return false;\n  }\n\n  return new personClass(obj);\n};\n\nvar hirePeople = function hirePeople(e) {\n  var target = e && e.target;\n\n  if (target.tagName != \"INPUT\") {\n    return;\n  }\n\n  var personNeme = target.dataset.toggle;\n\n  for (var i = 0; i < peopleArray.length; i++) {\n    if (personNeme == peopleArray[i].name) {\n      var newObj = HeadHunt(peopleArray[i]);\n      hiredPeoples.push(newObj);\n      console.log(hiredPeoples);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hirePeople);\n\n//# sourceURL=webpack:///./classWork/task1.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classWork_task1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classWork/task1 */ \"./classWork/task1.js\");\n\nvar body = document.querySelector('body');\nbody.addEventListener('click', _classWork_task1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); // console.log(peopleArray);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });