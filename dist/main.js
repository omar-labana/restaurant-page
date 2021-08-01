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

/***/ "./src/contanct.js":
/*!*************************!*\
  !*** ./src/contanct.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ \"./src/shared.js\");\n\r\n\r\n\r\nconst createContact = () => {\r\n    const homeContainer = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('div', ['flex', 'flex-col'])\r\n    const frameOne = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createFrame)()\r\n\r\n    homeContainer.appendChild(frameOne)\r\n\r\n    const frameOneContent = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('div', ['flex', 'justify-center', 'items-center', 'h-60'])\r\n\r\n    const frameOneImage = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('img', ['w-1/2', 'rounded-md', 'p-10'])\r\n    frameOneImage.src = 'https://images.pexels.com/photos/4790061/pexels-photo-4790061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'\r\n    const frameOneText = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('div', [])\r\n    frameOneText.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('h2',[],'Maro'))\r\n    frameOneText.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('p',[],'Barista'))\r\n    frameOneText.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('p',[],`555-555-5554`))\r\n    frameOneText.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('p',[],'totallyRealEmail@notFake.com'))\r\n\r\n    frameOneContent.appendChild(frameOneImage)\r\n    frameOneContent.appendChild(frameOneText)\r\n\r\n    frameOne.appendChild(frameOneContent)\r\n\r\n    return homeContainer\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contanct.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ \"./src/shared.js\");\n\r\n\r\nconst createHome = () => {\r\n    const homeContainer = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('div', ['flex', 'flex-col'])\r\n    const frameOne = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createFrame)()\r\n    const frameTwo = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createFrame)()\r\n    const frameThree = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createFrame)()\r\n\r\n    homeContainer.appendChild(frameOne)\r\n    homeContainer.appendChild(frameTwo)\r\n    homeContainer.appendChild(frameThree)\r\n\r\n    const frameOneContent = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('div', ['flex', 'justify-center', 'items-center', 'h-60'])\r\n\r\n    const frameOneText = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('p', [], `\r\n    Maro's has the best coffee! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, drinking like a bear! This is exactly the kind of place that I like to return to again and again.\r\n    `)\r\n\r\n    const frameOneImage = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('img', ['w-1/2', 'rounded-md', 'p-10'])\r\n\r\n    frameOneImage.src = 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'\r\n\r\n    frameOneContent.appendChild(frameOneImage)\r\n    frameOneContent.appendChild(frameOneText)\r\n    frameOne.appendChild(frameOneContent)\r\n\r\n    // Frame 2\r\n    const frameTwoContent = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('div', ['flex', 'justify-center', 'items-center', 'flex-col'])\r\n    const frameTwoHeading = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('h2', ['text-2xl','my-2'], `Hours`)\r\n    let hours = [\r\n        'Sunday: 8am - 8pm'\r\n        ,\r\n        'Monday: 6am - 6pm'\r\n        ,\r\n        'Tuesday: 6am - 6pm'\r\n        ,\r\n        'Wednesday: 6am - 6pm'\r\n        ,\r\n        'Thursday: 6am - 10pm'\r\n        ,\r\n        'Friday: 6am - 10pm'\r\n        ,\r\n        'Saturday: 8am - 10pm'\r\n    ]\r\n    const frameTwoScedule = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('div')\r\n    hours.forEach(hour => {\r\n        frameTwoScedule.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('p', ['my-2'], hour))\r\n    })\r\n    frameTwoContent.appendChild(frameTwoHeading)\r\n    frameTwoContent.appendChild(frameTwoScedule)\r\n    frameTwo.appendChild(frameTwoContent)\r\n\r\n    frameThree.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('h2', ['text-2xl','my-2','text-center'], `Location\r\n    `))\r\n    frameThree.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('p', ['my-2','text-center'], `123 Forest Drive, Forestville, Maine\r\n\r\n    `))\r\n    return homeContainer\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ \"./src/shared.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\n\r\nconst mainElement = document.getElementById('content')\r\nmainElement.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_1__.default)())\r\n\r\nconst viewTag = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('div', ['px-30', 'mt-10'])\r\nviewTag.setAttribute('id', 'view')\r\nmainElement.appendChild(viewTag)\r\n// Default view\r\nviewTag.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.default)())\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ \"./src/shared.js\");\n\r\n\r\n\r\nconst createMenu = () => {\r\n    const data = [\r\n        {\r\n            name: \"Coffe - 1\",\r\n            desc: \"Very cool description on how this item is so good\",\r\n            price: '14$'\r\n        },\r\n        {\r\n            name: \"Coffe - 2\",\r\n            desc: \"Very cool description on how this item is so good\",\r\n            price: '14$'\r\n        },\r\n        {\r\n            name: \"Coffe - 3\",\r\n            desc: \"Very cool description on how this item is so good\",\r\n            price: '14$'\r\n        }\r\n    ]\r\n\r\n    const homeContainer = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('div', ['flex', 'flex-col'])\r\n    data.forEach(item => {\r\n        const frame = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createFrame)()\r\n        frame.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('h2', ['m-3','a'], item.name))\r\n        frame.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('p', ['m-3','a'], item.desc))\r\n        frame.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('p', ['m-3','a'], item.price))\r\n        homeContainer.appendChild(frame)\r\n    })\r\n    return homeContainer\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ \"./src/shared.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contanct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contanct */ \"./src/contanct.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst createNavbar = () => {\r\n    const header = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('header', ['flex', 'justify-center', 'items-center', 'flex-col', 'px-20', 'mt-5'])\r\n    header.appendChild((0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('h1', ['text-5xl', 'text-yellow-400'], 'Mero Cafe', 'font-bold'))\r\n    // ul \r\n    const linksDiv = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('div', ['text-3xl', 'text-yellow-100', 'mt-2'])\r\n    const homeLink = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('a', ['mx-4', 'cursor-pointer'], 'Home')\r\n    const menuLink = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('a', ['mx-4', 'cursor-pointer'], 'Menu')\r\n    const contactLink = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.create)('a', ['mx-4', 'cursor-pointer'], 'Contact')\r\n\r\n    homeLink.addEventListener('click', () => {\r\n        ;(0,_shared__WEBPACK_IMPORTED_MODULE_0__.clearView)()\r\n        const viewElement = document.getElementById('view')\r\n        viewElement.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)())\r\n    })\r\n\r\n    menuLink.addEventListener('click', () => {\r\n        ;(0,_shared__WEBPACK_IMPORTED_MODULE_0__.clearView)()\r\n        const viewElement = document.getElementById('view')\r\n        viewElement.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)())\r\n    })\r\n\r\n    contactLink.addEventListener('click', () => {\r\n        ;(0,_shared__WEBPACK_IMPORTED_MODULE_0__.clearView)()\r\n        const viewElement = document.getElementById('view')\r\n        viewElement.appendChild((0,_contanct__WEBPACK_IMPORTED_MODULE_3__.default)())\r\n    })\r\n\r\n    linksDiv.appendChild(homeLink)\r\n    linksDiv.appendChild(menuLink)\r\n    linksDiv.appendChild(contactLink)\r\n\r\n    header.appendChild(linksDiv)\r\n\r\n\r\n\r\n    return header\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavbar);\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

/***/ }),

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* binding */ create),\n/* harmony export */   \"clearView\": () => (/* binding */ clearView),\n/* harmony export */   \"createFrame\": () => (/* binding */ createFrame)\n/* harmony export */ });\nconst create = (elementName, styles = false, text = false) => {\r\n    let element = document.createElement(elementName)\r\n    if (styles) {\r\n        styles.forEach(style => {\r\n            element.classList.add(style)\r\n        });\r\n    }\r\n    if (text) {\r\n        element.textContent = text\r\n    }\r\n    return element\r\n}\r\n\r\nconst clearView = () => {\r\n    document.getElementById('view').innerHTML = ''\r\n}\r\n\r\nconst createFrame = () => {\r\n    return create('div', ['border-2', 'rounded-md', 'my-3', 'w-1/2', 'mx-auto', 'text-gray-100', 'text-xl'])\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/shared.js?");

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