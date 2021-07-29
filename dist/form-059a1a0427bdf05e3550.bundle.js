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

/***/ "./resources/js/form.js":
/*!******************************!*\
  !*** ./resources/js/form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product/Product */ \"./resources/js/product/Product.js\");\n/* harmony import */ var _storage_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage/Storage */ \"./resources/js/storage/Storage.js\");\n\n\n\nconst urlParams = new URLSearchParams(window.location.search);\nconst id = document.getElementById('idInput');\nconst name = document.getElementById('name');\nconst desc = document.getElementById('description');\nconst price = document.getElementById('price');\nconst image = document.getElementById('image');\n\nlet storage = new _storage_Storage__WEBPACK_IMPORTED_MODULE_1__.Storage();\n\nfunction getUrlParams() {\n    id.value = urlParams.get(\"id\") ?? \"\";\n    name.value = urlParams.get(\"name\") ?? \"\";\n    desc.value = urlParams.get(\"desc\") ?? \"\";\n    price.value = urlParams.get(\"price\") ?? \"\";\n    image.value = urlParams.get(\"image\") ?? \"\";\n}\n\ndocument.querySelector('form').addEventListener('submit', (e) => {\n    e.preventDefault()\n    let product = new _product_Product__WEBPACK_IMPORTED_MODULE_0__.Product({id: id.value, name: name.value, description: desc.value, price: price.value, image: image.value});\n    storage.update(\"crud\", product);\n    window.location.href = \"admin.html\";\n});\n\ngetUrlParams();\n\n//# sourceURL=webpack://Pizza/./resources/js/form.js?");

/***/ }),

/***/ "./resources/js/product/Product.js":
/*!*****************************************!*\
  !*** ./resources/js/product/Product.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products */ \"./resources/js/products.js\");\n\n\nclass Product {\n    constructor({id, name, price, description, image}) {\n            this.id = id || this.#generateId();\n            this.name = name;\n            this.price = price;\n            this.description = description;\n            this.image = image;\n    }\n\n    getHtml() {\n        return `\n            <div class=\"card text-white h-100\">\n                <img src=\"${this.image}\" class=\"product-image\" alt=\"${this.image}\">\n                <h4>${this.name}</h4>\n                <div class=\"btn-holder\">\n                    <button class=\"w-100\">\n                        <div class=\"to-sides\">\n                            <div>${this.price} MDL</div> \n                            <div>order <i class=\"bi-cart-plus\"></i></div>\n                        </div>\n                   </button>\n                </div>\n            </div>\n        `;\n    }\n\n    getHtmlRow() {\n        return `\n        <tr>\n            <td>${this.id}</td>\n            <td>${this.name}</td>\n            <td>${this.description}</td>\n            <td>${this.price}</td>\n            <td>${this.image}</td>\n            <td>\n                <div class=\"d-inline-flex actions\">\n                    <a href=\"form.html?id=${this.id}&name=${this.name}&desc=${this.description}&price=${this.price}&image=${this.image}\">\n                        <button class=\"btn btn-warning\"><i class=\"bi-pencil-square\"></i></button>\n                    </a>\n                    <button class=\"btn btn-danger delete\"><i class=\"bi-trash\"></i></button>\n                </div>\n            </td>                        \n        </tr>\n        `;\n    }\n\n    #generateId() {\n        return Math.max.apply(null,\n            (_products__WEBPACK_IMPORTED_MODULE_0__.products.map(obj => obj.id))\n                .filter(id => id !== undefined)\n        ) + 1;\n    }\n}\n\n//# sourceURL=webpack://Pizza/./resources/js/product/Product.js?");

/***/ }),

/***/ "./resources/js/products.js":
/*!**********************************!*\
  !*** ./resources/js/products.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"products\": () => (/* binding */ products)\n/* harmony export */ });\n/* harmony import */ var _storage_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage/Storage */ \"./resources/js/storage/Storage.js\");\n\n\nconst pizzasArray = [\n    {\n        id: 1,\n        name: \"Affumicata\",\n        price: 95,\n        description: \"description\",\n        image: \"../../images/pizzas/9c36508a696673f98fea8634a908d3ad.jpg\",\n    },\n    {\n        id: 2,\n        name: \"Cheese&Spinach\",\n        price: 95,\n        description: \"description\",\n        image: \"../../images/pizzas/15cda0097dd4bd4227af9247a663f935.jpg\",\n    },\n    {\n        id: 3,\n        name: \"5 Cheese\",\n        price: 90,\n        description: \"description\",\n        image: \"../../images/pizzas/d427104f35bfee2b727079d5e414df43.jpg\",\n    },\n    {\n        id: 4,\n        name: \"Barbeque\",\n        price: 90,\n        description: \"description\",\n        image: \"../../images/pizzas/38c60145ae43db28fe54f871e88d72ca.jpg\",\n    },\n    {\n        id: 5,\n        name: \"Rancho\",\n        price: 88,\n        description: \"description\",\n        image: \"../../images/pizzas/266518ecf029ceeec3b01c094c8ca7f0.jpg\",\n    },\n    {\n        id: 6,\n        name: \"Prosciutto\",\n        price: 115,\n        description: \"description\",\n        image: \"../../images/pizzas/e3d52e592e43fe7f522fe2ccb527db6f.jpg\",\n    },\n    {\n        id: 7,\n        name: \"Pepperoni\",\n        price: 90,\n        description: \"description\",\n        image: \"../../images/pizzas/6fe9ec1ff95274fb46723971624ede0b.jpg\",\n    },\n    {\n        id: 8,\n        name: \"Margherita\",\n        price: 75,\n        description: \"description\",\n        image: \"../../images/pizzas/38a8de519a66ddb36a5f650b87218890.jpg\",\n    },\n];\n\nlet products = pizzasArray.concat(new _storage_Storage__WEBPACK_IMPORTED_MODULE_0__.Storage().load(\"crud\"));\n\n\n//# sourceURL=webpack://Pizza/./resources/js/products.js?");

/***/ }),

/***/ "./resources/js/storage/Storage.js":
/*!*****************************************!*\
  !*** ./resources/js/storage/Storage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n\n    load(key) {\n        try {\n            localStorage.setItem(key, localStorage.getItem(key) || JSON.stringify([]));\n            return JSON.parse(localStorage.getItem(key));\n        } catch (err) {\n            return null;\n        }\n    }\n\n    update(key, product) {\n        console.log(product);\n        let list = this.load(key);\n        let index = list.findIndex(item => +item.id === +product.id); // add \"+\" ?\n\n        if (index !== -1) {\n            list[index] = product;\n            localStorage.setItem(key, JSON.stringify(list));\n        } else {\n            localStorage.setItem(key, JSON.stringify(list.concat([product])));\n        }\n    }\n\n    save(key, arr) {\n        localStorage.setItem(key, JSON.stringify(arr));\n    }\n\n    delete(key, product, productsView) {\n        let productsArr = this.load(key);\n        let index = productsArr.findIndex(item => item.id === product.id);\n        productsArr.splice(index, 1);\n        this.save(key, productsArr);\n        productsView.showRows(productsArr);\n    }\n}\n\n//# sourceURL=webpack://Pizza/./resources/js/storage/Storage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/form.js");
/******/ 	
/******/ })()
;