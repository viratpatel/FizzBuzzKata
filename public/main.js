/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { fizzBuzz } = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nlet numbers = Array.from(Array(101).keys()).slice(1);\nlet results = fizzBuzz(numbers);\n\nif (results.length > 0) {\n  let div = document.getElementById(\"numContainer\");\n  results.map((item) => {\n    let span = document.createElement(\"span\");\n    span.innerText = item;\n    div.append(span);\n  });\n}\n\nconst values = fizzBuzz([3,4,5]);\nconsole.log(values);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("const fizzBuzz = (numbers) => {\n  let results = [];\n  numbers.forEach((number) => {\n    !isNaN(number) && (results = [...results, identifyNumber(number)]);\n  });\n  return results;\n};\n\nconst identifyNumber = (number) => {\n  if (number % 15 === 0) return \"FizzBuzz\";\n  if (number % 3 === 0) return \"Fizz\";\n  if (number % 5 === 0) return \"Buzz\";\n  return number;\n};\n\nexports.fizzBuzz = fizzBuzz;\nexports.identifyNumber = identifyNumber;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;