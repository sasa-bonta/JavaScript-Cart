import {Storage} from "../storage/Storage.js";
import {products} from "../products.js";
import {CartItem} from "./CartItem.js";
import {CartView} from "./CartView.js";

export class Cart {

    constructor({deleteBtn}) {
        this.cartProducts = this.loadCartArray();
        this.deleteBtn = deleteBtn;
        this.cartView = new CartView(this);
    }

    showCount() {
        document.getElementById('items-count').innerHTML = this.#countItems();
    }

    addToCart(product) {
        this.addItemToCart(product);
        this.showCount();
    }

    addItemToCart(product) {
        let cartItem = this.cartProducts.find(item => item.id === product.id)
        if (cartItem === undefined) {
            let pizza = products.find(pizza => pizza.id === product.id);
            let newItem = Object.assign({}, product);
            newItem.quantity = 1
            this.cartProducts.push(newItem)
        } else {
            cartItem.quantity++;
        }
        this.save();
    }

    deleteItem(cartItem) {
        let index = this.cartProducts.findIndex(item => item.id === cartItem.id);
        this.cartProducts.splice(index, 1);
        this.save();
        this.showCount();
        this.cartView.update(this.cartProducts);
    }

    checkProductsAvailability() {
        this.cartProducts.forEach(product => {
            if (products.find(pizza => pizza.id === product.id) === undefined) {
                this.deleteItem(product.id);
            }
        });
        return this;
    }

    loadCartArray() {
        let array = new Storage().load("cart");
        array.forEach(obj => {
            obj = new CartItem(obj);
        });
        return array;
    }

    save() {
        localStorage.cart = JSON.stringify(this.cartProducts);
    }

    #countItems() {
        let itemsCount = 0;
        this.cartProducts.forEach(prod => {
            itemsCount += prod.quantity;
        })
        return itemsCount;
    }
}