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

/***/ "./resources/js/cart/Cart.js":
/*!***********************************!*\
  !*** ./resources/js/cart/Cart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cart\": () => (/* binding */ Cart)\n/* harmony export */ });\n/* harmony import */ var _storage_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/Storage */ \"./resources/js/storage/Storage.js\");\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products */ \"./resources/js/products.js\");\n/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartItem */ \"./resources/js/cart/CartItem.js\");\n/* harmony import */ var _CartView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartView */ \"./resources/js/cart/CartView.js\");\n\n\n\n\n\nclass Cart {\n\n    constructor({deleteBtn}) {\n        this.storage = new _storage_Storage__WEBPACK_IMPORTED_MODULE_0__.Storage();\n        this.cartProducts = this.loadCartArray();\n        this.deleteBtn = deleteBtn;\n        this.cartView = new _CartView__WEBPACK_IMPORTED_MODULE_3__.CartView(this);\n    }\n\n    showCount() {\n        document.getElementById('items-count').innerHTML = this.#countItems();\n    }\n\n    addToCart(product) {\n        this.addItemToCart(product);\n        this.showCount();\n    }\n\n    addItemToCart(product) {\n        let cartItem = this.cartProducts.find(item => item.id === product.id)\n        if (cartItem === undefined) {\n            let newItem = Object.assign({}, product);\n            newItem.quantity = 1\n            this.cartProducts.push(newItem)\n        } else {\n            cartItem.quantity++;\n        }\n        this.save();\n    }\n\n    deleteItem(cartItem) {\n        let index = this.cartProducts.findIndex(item => item.id === cartItem.id);\n        this.cartProducts.splice(index, 1);\n        this.save();\n        this.showCount();\n        this.cartView.update(this.cartProducts);\n    }\n\n    checkProductsAvailability() {\n        this.cartProducts.forEach(product => {\n            if (_products__WEBPACK_IMPORTED_MODULE_1__.products.find(pizza => pizza.id === product.id) === undefined) {\n                this.deleteItem(product.id);\n            }\n        });\n        return this;\n    }\n\n    loadCartArray() {\n        let array = this.storage.load(\"cart\");\n        array.forEach(obj => {\n            new _CartItem__WEBPACK_IMPORTED_MODULE_2__.CartItem(obj);\n        });\n        return array;\n    }\n\n    save() {\n        this.storage.save(\"cart\", this.cartProducts);\n    }\n\n    #countItems() {\n        let itemsCount = 0;\n        this.cartProducts.forEach(prod => {\n            itemsCount += prod.quantity;\n        })\n        return itemsCount;\n    }\n}\n\n//# sourceURL=webpack://Pizza/./resources/js/cart/Cart.js?");

/***/ }),

/***/ "./resources/js/cart/CartItem.js":
/*!***************************************!*\
  !*** ./resources/js/cart/CartItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartItem\": () => (/* binding */ CartItem)\n/* harmony export */ });\nclass CartItem {\n\n    s3 = \"&nbsp;&nbsp;&nbsp;\";\n\n    constructor({id, name, price, description, image, quantity}) {\n        this.id = id;\n        this.name = name;\n        this.price = price;\n        this.description = description;\n        this.image = image;\n        this.quantity = quantity;\n    }\n\n    getHtml(priceAll) {\n        return `\n        <img src=\"${this.image}\" class=\"cart-image\" alt=\"item.name\"> \n                               <div class=\"product-cart\">\n                                   ${this.name}: ${this.s3}\n                                   ${this.quantity} pcs. \n                                   ${this.s3 + this.s3} ${priceAll} MDL \n                                   <button class=\"btn btn-danger delete-btn\">\n                                       <i class=\"bi-trash\"></i>\n                                   </button>\n                               </div><br>\n        `;\n    }\n}\n\n//# sourceURL=webpack://Pizza/./resources/js/cart/CartItem.js?");

/***/ }),

/***/ "./resources/js/cart/CartView.js":
/*!***************************************!*\
  !*** ./resources/js/cart/CartView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartView\": () => (/* binding */ CartView)\n/* harmony export */ });\n/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartItem */ \"./resources/js/cart/CartItem.js\");\n\n\nclass CartView {\n    constructor(cart) {\n        this.list = document.getElementById(\"cart-modal\");\n        this.delete = cart.deleteBtn;\n        this.footer =  document.getElementById('modal-footer');\n    }\n\n    update(cartItems) {\n        this.#removeAllChildNodes();\n        this.display(cartItems);\n    }\n\n    display(cartItems) {\n        if (cartItems.length === 0) {\n            this.list.innerHTML = `<div class=\"cart-empty\"> Your cart is empty!</div><br>`;\n            this.footer.innerHTML = `<button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>`;\n        } else {\n            let total = 0;\n\n            cartItems.forEach((item) => {\n                let priceAll = item.price * item.quantity;\n                total += priceAll;\n                const cartItem = document.createElement(\"div\");\n                cartItem.innerHTML = new _CartItem__WEBPACK_IMPORTED_MODULE_0__.CartItem(item).getHtml(priceAll);\n\n                const deleteButton = cartItem.querySelector(\".delete-btn\");\n                deleteButton.addEventListener('click', () => this.delete(item));\n                this.list.appendChild(cartItem);\n            });\n            const bill = document.createElement(\"div\");\n            bill.className = \"total\";\n            bill.innerHTML = `<div class=\"to-sides\"><div>Total:</div> <div>${total} MDL</div></div>`\n            this.footer.innerHTML = `<button class=\"btn btn-primary\" \n                                             data-bs-target=\"#exampleModalToggle2\" \n                                             data-bs-toggle=\"modal\" \n                                             data-bs-dismiss=\"modal\"\n                                             > Order </button>`\n            this.list.append(bill);\n        }\n    }\n\n    #removeAllChildNodes() {\n        while (this.list.firstChild) {\n            this.list.removeChild(this.list.firstChild);\n        }\n    }\n}\n\n//# sourceURL=webpack://Pizza/./resources/js/cart/CartView.js?");

/***/ }),

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _product_ProductsView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product/ProductsView */ \"./resources/js/product/ProductsView.js\");\n/* harmony import */ var _cart_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/Cart */ \"./resources/js/cart/Cart.js\");\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products */ \"./resources/js/products.js\");\n/* harmony import */ var _cart_CartView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart/CartView */ \"./resources/js/cart/CartView.js\");\n\n\n\n\n\nconst openCart = document.getElementById(\"cart-button\");\n\nlet cart = new _cart_Cart__WEBPACK_IMPORTED_MODULE_1__.Cart({deleteBtn: (cartItem) => cart.deleteItem(cartItem)});\nlet productsView = new _product_ProductsView__WEBPACK_IMPORTED_MODULE_0__.ProductsView({onBtnClick: (product) => cart.addToCart(product)});\nproductsView.display(_products__WEBPACK_IMPORTED_MODULE_2__.products);\nlet cartView = new _cart_CartView__WEBPACK_IMPORTED_MODULE_3__.CartView(cart);\ncart.checkProductsAvailability().showCount();\n\nopenCart.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    cartView.display(cart.loadCartArray());\n});\n\n\n//# sourceURL=webpack://Pizza/./resources/js/index.js?");

/***/ }),

/***/ "./resources/js/product/Product.js":
/*!*****************************************!*\
  !*** ./resources/js/product/Product.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products */ \"./resources/js/products.js\");\n\n\nclass Product {\n    constructor({id, name, price, description, image}) {\n            this.id = id || this.#generateId();\n            this.name = name;\n            this.price = price;\n            this.description = description;\n            this.image = image;\n    }\n\n    getHtml() {\n        return `\n            <div class=\"card text-white h-100\">\n                <img src=\"${this.image}\" class=\"product-image\" alt=\"${this.image}\">\n                <h4>${this.name}</h4>\n                <div class=\"btn-holder\">\n                    <button class=\"w-100\">\n                        <div class=\"to-sides\">\n                            <div>${this.price} MDL</div> \n                            <div>order <i class=\"bi-cart-plus\"></i></div>\n                        </div>\n                   </button>\n                </div>\n            </div>\n        `;\n    }\n\n    getHtmlRow() {\n        return `\n        <tr>\n            <td>${this.id}</td>\n            <td>${this.name}</td>\n            <td>${this.description}</td>\n            <td>${this.price}</td>\n            <td>${this.image}</td>\n            <td>\n                <div class=\"d-inline-flex actions\">\n                    <a href=\"form.html?id=${this.id}&name=${this.name}&desc=${this.description}&price=${this.price}&image=${this.image}\">\n                        <button class=\"btn btn-warning\"><i class=\"bi-pencil-square\"></i></button>\n                    </a>\n                    <button class=\"btn btn-danger delete\"><i class=\"bi-trash\"></i></button>\n                </div>\n            </td>                        \n        </tr>\n        `;\n    }\n\n    #generateId() {\n        return Math.max.apply(null,\n            (_products__WEBPACK_IMPORTED_MODULE_0__.products.map(obj => obj.id))\n                .filter(id => id !== undefined)\n        ) + 1;\n    }\n}\n\n//# sourceURL=webpack://Pizza/./resources/js/product/Product.js?");

/***/ }),

/***/ "./resources/js/product/ProductsView.js":
/*!**********************************************!*\
  !*** ./resources/js/product/ProductsView.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductsView\": () => (/* binding */ ProductsView)\n/* harmony export */ });\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ \"./resources/js/product/Product.js\");\n\n\nclass ProductsView {\n\n    tableHeader = `\n    <tr>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Description</th>\n        <th>Price</th>\n        <th>Image</th>\n        <th>Actions</th>\n    </tr>\n`;\n\n    constructor({onBtnClick}) {\n        this.div = document.getElementById(\"pizzas\");\n        this.action = onBtnClick;\n    }\n\n    display(products) {\n        const row = document.createElement(\"div\");\n        row.className = \"row\";\n\n        products.forEach((pizza) => {\n            const col = document.createElement(\"div\");\n            col.className = \"col col-6 col-sm-6 col-md-4 col-lg-3\";\n            col.innerHTML = new _Product__WEBPACK_IMPORTED_MODULE_0__.Product(pizza).getHtml();\n\n            const button = col.querySelector(\".btn-holder button\");\n            button.addEventListener('click', () => this.action(pizza));\n            row.appendChild(col);\n        });\n        document.getElementById('pizzas').appendChild(row);\n    }\n\n    showRows(products) {\n        const div = document.getElementById(\"crudItems\");\n        div.innerHTML = \"\";\n        if (products.length === 0) {\n            div.innerHTML = `<div class=\"cart-empty\"> No products found </div><br>`;\n        } else {\n            let table = document.createElement(\"table\");\n            table.className = \"table table-dark table-hover\";\n            let tbody = document.createElement(\"tbody\");\n            tbody.innerHTML = this.tableHeader;\n            table.appendChild(tbody);\n            div.appendChild(table);\n\n            products.forEach(item => {\n                item = new _Product__WEBPACK_IMPORTED_MODULE_0__.Product(item);\n                let itemRow = document.createElement(\"tr\");\n                itemRow.innerHTML = item.getHtmlRow();\n\n                const deleteBtn = itemRow.querySelector(\".delete\");\n                deleteBtn.addEventListener('click', () => {\n                    if (confirm(\"Delete this item?\")) this.action(item)\n                });\n\n                tbody.appendChild(itemRow);\n            });\n        }\n    }\n}\n\n//# sourceURL=webpack://Pizza/./resources/js/product/ProductsView.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/index.js");
/******/ 	
/******/ })()
;