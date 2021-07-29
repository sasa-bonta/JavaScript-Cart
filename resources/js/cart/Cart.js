import {Storage} from "../storage/Storage";
import {products} from "../products";
import {CartItem} from "./CartItem";
import {CartView} from "./CartView";

export class Cart {

    constructor({deleteBtn}) {
        this.storage = new Storage();
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
        let array = this.storage.load("cart");
        array.forEach(obj => {
            new CartItem(obj);
        });
        return array;
    }

    save() {
        this.storage.save("cart", this.cartProducts);
    }

    #countItems() {
        let itemsCount = 0;
        this.cartProducts.forEach(prod => {
            itemsCount += prod.quantity;
        })
        return itemsCount;
    }
}