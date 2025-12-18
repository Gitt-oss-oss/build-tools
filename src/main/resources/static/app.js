/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generator.js":
/*!**************************!*\
  !*** ./src/generator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DogCardComponent: () => (/* binding */ DogCardComponent)\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\nclass BaseComponent {\n    constructor(object) {\n        this.name = object.title\n        this.age = object.age\n        this.description = object.description\n        this.gender = object.sex\n        this.link = object.dogImage\n        this._element = null;\n    }\n\n    getHTML() {\n\n        return ``\n    }\n\n    getElement() {\n        if (!this._element) {\n            this._element = (0,_view__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getHTML());\n        }\n\n        return this._element;\n    }\n\n    removeElement() {\n        this._element = null;\n    }\n}\n\nclass DogCardComponent extends BaseComponent {\n    constructor(object) {\n        super(object)\n    }\n\n    getHTML() {\n\n        return `<div class=\"container\">\n        <img class=\"container-dog-picture\" src=\"${this.link}\">\n        <div class=\"container-dog-info\">\n            <span class=\"text-base dog-info-name\">${this.name}</span>\n            <span class=\"text-base dog-info-gender\">${this.gender}</span>\n        </div>\n    </div>`\n    }\n}\n\n\n//# sourceURL=webpack://ui-app/./src/generator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ \"./src/generator.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\n\nclass AppController {\n    constructor() {\n        this.dogControllers = [];\n    }\n    init() {\n        let sender = new _model__WEBPACK_IMPORTED_MODULE_1__.RequestSender();\n        sender.sendJSONRequest().then((data) => {\n            data.forEach(element => {\n                let dog = new DogController(element);\n                dog.showDog();\n                this.dogControllers.push(dog);\n            });\n        });\n    }\n}\n\nclass DogController {\n    constructor(dogObject) {\n        this.dog = dogObject;\n        this.component = null;\n        this.view = new _view__WEBPACK_IMPORTED_MODULE_2__.View();\n    }\n\n    showDog() {\n        this.component = new _generator__WEBPACK_IMPORTED_MODULE_0__.DogCardComponent(this.dog);\n        this.view.render(this.component, \".list\", \"BEFOREEND\");\n    }\n}\n\nlet app = new AppController()\napp.init()\n\n//# sourceURL=webpack://ui-app/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RequestSender: () => (/* binding */ RequestSender)\n/* harmony export */ });\nclass RequestSender {\n    constructor() {\n    }\n    sendJSONRequest() {\n        return fetch(`${window.location.origin}/dogs`).then((response) => response.json())\n    }\n}\n\n//# sourceURL=webpack://ui-app/./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   View: () => (/* binding */ View),\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   remove: () => (/* binding */ remove)\n/* harmony export */ });\nfunction createElement(template) {\n    const newElement = document.createElement(`div`);\n    newElement.innerHTML = template;\n\n    return newElement.firstChild;\n};\n\nconst remove = (component) => {\n    component.getElement().remove();\n};\n\nclass View {\n\n    render(element, containerName, place) {\n\n        let compomnent = element.getElement();\n\n        let container = document.querySelector(containerName);\n\n        switch (place) {\n            case \"AFTERBEGIN\":\n                container.prepend(compomnent);\n                break;\n            case \"BEFOREEND\":\n                container.append(compomnent);\n                break;\n        }\n    }\n}\n\n//# sourceURL=webpack://ui-app/./src/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;