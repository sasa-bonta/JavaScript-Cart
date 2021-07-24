class CartItem {
    constructor({id, name, price, description, image, quantity}) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.quantity = quantity;
    }
}

class Cart {

    s3 = "&nbsp;&nbsp;&nbsp;";

    constructor() {
        this.cartProducts = this.loadCartArray();
    }

    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    showCount() {
        document.getElementById('items-count').innerHTML = this.countItems();
    }

    countItems() {
        let itemsCount = 0;
        this.cartProducts.forEach(prod => {
            itemsCount += prod.quantity;
        })
        return itemsCount;
    }

    addToCart(product) {
        this.addItemToCart(product);
        this.showCount();
    }

    addItemToCart(product) {
        let cartItem = this.cartProducts.find(item => item.id === product.id)
        if (cartItem === undefined) {
            let pizza = pizzasArray.find(pizza => pizza.id === product.id);
            let newItem = Object.assign({}, product);
            newItem.quantity = 1
            this.cartProducts.push(newItem)
        } else {
            cartItem.quantity++;
        }
        this.save();
    }

    deleteItem(id) {
        let index = this.cartProducts.findIndex(item => item.id === id);
        this.cartProducts.splice(index, 1);
        this.save();
        this.showCount();
        this.displayCart();
    }

    checkProductsAvailability() {
        this.cartProducts.forEach(product => {
            if (pizzasArray.find(pizza => pizza.id === product.id) === undefined) {
                this.deleteItem(product.id);
            }
        });
        return this;
    }

    displayCart() {
        let itemsToDisplay = "";
        let total = 0;
        if (!this.isEmpty(this.cartProducts)) {
            this.cartProducts.forEach(item => {
                let price = item.price * item.quantity;
                total += price;
                itemsToDisplay += `<img src="${item.image}" class="cart-image" alt="item.name"> 
                               <div class="product-cart">
                                   ${item.name}: ${s3} ${item.quantity} pcs. ${this.s3, this.s3} ${price} MDL 
                                   <button class="btn btn-danger delete-btn" onclick="deleteItem(${item.id})">
                                       <i class="bi-trash"></i>
                                   </button>
                               </div><br>`
            });
        } else {
            itemsToDisplay += `<div class="cart-empty"> Your cart is empty!</div><br>`;
            document.getElementById('modal-footer').innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;
        }
        document.getElementById('cart-modal').innerHTML = itemsToDisplay;
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
}