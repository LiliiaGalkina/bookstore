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

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   burger: () => (/* binding */ burger),\n/* harmony export */   mobileMenu: () => (/* binding */ mobileMenu)\n/* harmony export */ });\nvar burger = document.querySelector(\"#burger\");\nvar menu = document.querySelector(\"#menu\");\nvar mobileMenu = function mobileMenu() {\n  burger.classList.toggle(\"header__burger_active\");\n  menu.classList.toggle(\"header__menu-list_active\");\n};\n\n//# sourceURL=webpack://bookstore/./src/js/header.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/reset.scss */ \"./src/scss/reset.scss\");\n/* harmony import */ var _scss_general_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/general-style.scss */ \"./src/scss/general-style.scss\");\n/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/header.scss */ \"./src/scss/header.scss\");\n/* harmony import */ var _scss_slider_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/slider.scss */ \"./src/scss/slider.scss\");\n/* harmony import */ var _scss_books_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/books.scss */ \"./src/scss/books.scss\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider.js */ \"./src/js/slider.js\");\n//Стили\n\n\n\n\n\n\n//JS\n//header\n\n_header__WEBPACK_IMPORTED_MODULE_5__.burger.addEventListener(\"click\", _header__WEBPACK_IMPORTED_MODULE_5__.mobileMenu);\n\n//slider\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_slider_js__WEBPACK_IMPORTED_MODULE_6__.initSlider)();\n});\n\n//# sourceURL=webpack://bookstore/./src/js/index.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initSlider: () => (/* binding */ initSlider)\n/* harmony export */ });\nvar slides = [\"../src/img/banner1.png\", \"../src/img/banner2.png\", \"../src/img/banner3.png\"];\nfunction initSlider() {\n  if (!slides || !slides.length) return;\n  var sliderImage = document.querySelector(\".slider__items\");\n  var sliderDots = document.querySelector(\".slider__dots\");\n  initImages();\n  initDots();\n  initAutoplay();\n  function initImages() {\n    slides.forEach(function (image, index) {\n      var sliderImageItem = \"<div class = \\\"slider__item n\".concat(index, \" \").concat(index === 0 ? \"slider__item_active\" : \"\", \"\\\" data-index=\\\"\").concat(index, \"\\\"><img src = \\\"\").concat(slides[index], \"\\\" alt = \\\"banner\\\"></div>\");\n      sliderImage.innerHTML += sliderImageItem;\n    });\n  }\n  function initDots() {\n    slides.forEach(function (image, index) {\n      var dot = \"<div class=\\\"slider__dot n\".concat(index, \" \").concat(index === 0 ? \"slider__dot_active\" : \"\", \"\\\" data-index=\\\"\").concat(index, \"\\\"></div>\");\n      sliderDots.innerHTML += dot;\n    });\n    sliderDots.querySelectorAll(\".slider__dot\").forEach(function (dot) {\n      dot.addEventListener(\"click\", function () {\n        console.log(this.dataset.index);\n        moveSlider(this.dataset.index);\n      });\n    });\n  }\n  function moveSlider(num) {\n    sliderImage.querySelector(\".slider__item_active\").classList.remove(\"slider__item_active\");\n    sliderImage.querySelector(\".n\" + num).classList.add(\"slider__item_active\");\n    sliderDots.querySelector(\".slider__dot_active\").classList.remove(\"slider__dot_active\");\n    sliderDots.querySelector(\".n\" + num).classList.add(\"slider__dot_active\");\n  }\n  function initAutoplay() {\n    setInterval(function () {\n      var curNumber = +sliderImage.querySelector(\".slider__item_active\").dataset.index;\n      var nextNumber = curNumber === slides.length - 1 ? 0 : curNumber + 1;\n      moveSlider(nextNumber);\n    }, 5000);\n  }\n}\n\n\n//# sourceURL=webpack://bookstore/./src/js/slider.js?");

/***/ }),

/***/ "./src/scss/books.scss":
/*!*****************************!*\
  !*** ./src/scss/books.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookstore/./src/scss/books.scss?");

/***/ }),

/***/ "./src/scss/general-style.scss":
/*!*************************************!*\
  !*** ./src/scss/general-style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookstore/./src/scss/general-style.scss?");

/***/ }),

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookstore/./src/scss/header.scss?");

/***/ }),

/***/ "./src/scss/reset.scss":
/*!*****************************!*\
  !*** ./src/scss/reset.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookstore/./src/scss/reset.scss?");

/***/ }),

/***/ "./src/scss/slider.scss":
/*!******************************!*\
  !*** ./src/scss/slider.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookstore/./src/scss/slider.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;