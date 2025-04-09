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

/***/ "./src/js/category.js":
/*!****************************!*\
  !*** ./src/js/category.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countMin: () => (/* binding */ countMin),\n/* harmony export */   getBooks: () => (/* binding */ getBooks),\n/* harmony export */   initCategory: () => (/* binding */ initCategory)\n/* harmony export */ });\n/* harmony import */ var _makeBookCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeBookCard */ \"./src/js/makeBookCard.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n\nvar countMin;\nvar currentCategory;\nvar buttonMore = document.querySelector(\".books__button\");\nvar categories = document.querySelectorAll(\".category__item\");\nfunction getBooks(_x) {\n  return _getBooks.apply(this, arguments);\n}\nfunction _getBooks() {\n  _getBooks = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(category) {\n    var key, URL, res, data;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          key = \"AIzaSyB00TE1mq6z511Ag795Cn4uy4RwyZ_3Cq0\";\n          URL = \"https://www.googleapis.com/books/v1/volumes?q=\\\"subject:\".concat(category, \"\\\"&key=\").concat(key, \"&printType=books&startIndex=\").concat(countMin, \"&maxResults=6&langRestrict=en\");\n          _context.prev = 2;\n          _context.next = 5;\n          return fetch(URL);\n        case 5:\n          res = _context.sent;\n          if (res.ok) {\n            _context.next = 9;\n            break;\n          }\n          alert(\"неудачная попытка\");\n          throw new Error(\"Upload failed\");\n        case 9:\n          _context.next = 11;\n          return res.json();\n        case 11:\n          data = _context.sent;\n          (0,_makeBookCard__WEBPACK_IMPORTED_MODULE_0__.makeBookCard)(data.items);\n          buttonMore.classList.remove(\"books__button_hidden\");\n          buttonMore.classList.add(\"books__button_show\");\n          _context.next = 20;\n          break;\n        case 17:\n          _context.prev = 17;\n          _context.t0 = _context[\"catch\"](2);\n          console.error(\"Error: \" + _context.t0.message);\n        case 20:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[2, 17]]);\n  }));\n  return _getBooks.apply(this, arguments);\n}\nfunction initCategory() {\n  countMin = 0;\n  currentCategory = \"\";\n  var _iterator = _createForOfIteratorHelper(categories),\n    _step;\n  try {\n    var _loop = function _loop() {\n      var category = _step.value;\n      category.addEventListener(\"click\", function () {\n        var _iterator2 = _createForOfIteratorHelper(categories),\n          _step2;\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var cat = _step2.value;\n            if (cat.classList.contains(\"category__item_active\")) {\n              cat.classList.remove(\"category__item_active\");\n            }\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n        category.classList.add(\"category__item_active\");\n        currentCategory = category.dataset.name;\n        getBooks(currentCategory);\n      });\n    };\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\nvar _iterator3 = _createForOfIteratorHelper(categories),\n  _step3;\ntry {\n  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n    var category = _step3.value;\n    category.addEventListener(\"click\", initCategory);\n  }\n} catch (err) {\n  _iterator3.e(err);\n} finally {\n  _iterator3.f();\n}\nfunction getBooksMore() {\n  countMin += 6;\n  getBooks(currentCategory);\n}\nbuttonMore.addEventListener(\"click\", getBooksMore);\n\n\n//# sourceURL=webpack://bookstore/./src/js/category.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/reset.scss */ \"./src/scss/reset.scss\");\n/* harmony import */ var _scss_general_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/general-style.scss */ \"./src/scss/general-style.scss\");\n/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/header.scss */ \"./src/scss/header.scss\");\n/* harmony import */ var _scss_slider_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/slider.scss */ \"./src/scss/slider.scss\");\n/* harmony import */ var _scss_books_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/books.scss */ \"./src/scss/books.scss\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _category_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category.js */ \"./src/js/category.js\");\n//Стили\n\n\n\n\n\n\n//JS\n//header\n\n_header__WEBPACK_IMPORTED_MODULE_5__.burger.addEventListener(\"click\", _header__WEBPACK_IMPORTED_MODULE_5__.mobileMenu);\n\n//slider\n\n\n//category\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_slider_js__WEBPACK_IMPORTED_MODULE_6__.initSlider)();\n  (0,_category_js__WEBPACK_IMPORTED_MODULE_7__.initCategory)();\n  (0,_category_js__WEBPACK_IMPORTED_MODULE_7__.getBooks)(\"Architecture\");\n});\n\n//# sourceURL=webpack://bookstore/./src/js/index.js?");

/***/ }),

/***/ "./src/js/makeBookCard.js":
/*!********************************!*\
  !*** ./src/js/makeBookCard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeBookCard: () => (/* binding */ makeBookCard)\n/* harmony export */ });\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/js/category.js\");\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\nfunction makeBookCard(arr) {\n  var bookCards = document.querySelector(\".books__items\");\n  if (_category__WEBPACK_IMPORTED_MODULE_0__.countMin == 0) {\n    bookCards.innerHTML = \"\";\n  }\n  var _iterator = _createForOfIteratorHelper(arr),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      var card = document.createElement(\"div\");\n      card.classList.add(\"books__card\", \"card-book\");\n      var cardImage = document.createElement(\"div\");\n      cardImage.classList.add(\"card-book__img\");\n      if (elem.volumeInfo.imageLinks.thumbnail) {\n        cardImage.innerHTML = \"<img src=\\\"\".concat(elem.volumeInfo.imageLinks.thumbnail, \" alt=\\\"\\u043E\\u0431\\u043B\\u043E\\u0436\\u043A\\u0430 \\u043A\\u043D\\u0438\\u0433\\u0438\\\">\");\n      } else {\n        cardImage.innerHTML = \"<img src=\\\"\".concat(\"../src/img/bookCards.jpg\", \" alt=\\\"\\u043E\\u0431\\u043B\\u043E\\u0436\\u043A\\u0430 \\u043A\\u043D\\u0438\\u0433\\u0438\\\">\");\n      }\n      card.appendChild(cardImage);\n      var cardContent = document.createElement(\"div\");\n      cardContent.classList.add(\"card-book__content\");\n      card.appendChild(cardContent);\n      var cardInfo = document.createElement(\"div\");\n      cardInfo.classList.add(\"card-book__info\");\n      cardContent.appendChild(cardInfo);\n      if (elem.volumeInfo.authors) {\n        var cardBookAutor = document.createElement(\"div\");\n        cardBookAutor.classList.add(\"card-book__autor\");\n        cardBookAutor.innerHTML = elem.volumeInfo.authors;\n        cardInfo.appendChild(cardBookAutor);\n      }\n      var cardBookTitle = document.createElement(\"h3\");\n      cardBookTitle.classList.add(\"card-book__title\", \"title-font\");\n      cardBookTitle.innerHTML = elem.volumeInfo.title;\n      cardInfo.appendChild(cardBookTitle);\n      if (elem.volumeInfo.averageRating && elem.volumeInfo.ratingsCount) {\n        var cardBookRating = document.createElement(\"div\");\n        cardBookRating.classList.add(\"card-book__rating\", \"rating\");\n        cardInfo.appendChild(cardBookRating);\n        var cardBookRatingStars = document.createElement(\"div\");\n        cardBookRatingStars.classList.add(\"rating__stars\");\n        cardBookRatingStars.innerHTML = elem.volumeInfo.averageRating;\n        var cardBookRatingCount = document.createElement(\"div\");\n        cardBookRatingCount.classList.add(\"rating__text\");\n        cardBookRatingCount.innerHTML = elem.volumeInfo.ratingsCount + \" review\";\n        cardBookRating.append(cardBookRatingStars, cardBookRatingCount);\n      }\n      if (elem.volumeInfo.description) {\n        var cardBookDescription = document.createElement(\"div\");\n        cardBookDescription.classList.add(\"card-book__text\");\n        cardBookDescription.innerHTML = elem.volumeInfo.description;\n        cardInfo.appendChild(cardBookDescription);\n      }\n      if (elem.saleInfo.saleability == \"FOR_SALE\") {\n        var cardBookPrice = document.createElement(\"div\");\n        cardBookPrice.classList.add(\"card-book__price\", \"title-font\");\n        cardBookPrice.innerHTML = \"\".concat(elem.saleInfo.retailPrice.currencyCode, \" \").concat(elem.saleInfo.retailPrice.amount);\n        cardInfo.appendChild(cardBookPrice);\n      }\n      var cardBookButton = document.createElement(\"button\");\n      cardBookButton.classList.add(\"card-book__button\", \"title-font\");\n      cardBookButton.innerHTML = \"buy now\";\n      cardContent.appendChild(cardBookButton);\n      bookCards.appendChild(card);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n\n//# sourceURL=webpack://bookstore/./src/js/makeBookCard.js?");

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