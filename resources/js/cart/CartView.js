import {CartItem} from "./CartItem";

export class CartView {
    constructor(cart) {
        this.list = document.getElementById("cart-modal");
        this.delete = cart.deleteBtn;
        this.footer =  document.getElementById('modal-footer');
    }

    update(cartItems) {
        this.#removeAllChildNodes();
        this.display(cartItems);
    }

    display(cartItems) {
        this.#removeAllChildNodes();
        if (cartItems.length === 0) {
            this.list.innerHTML = `<div class="cart-empty"> Your cart is empty!</div><br>`;
            this.footer.innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;
        } else {
            let total = 0;

            cartItems.forEach((item) => {
                let priceAll = item.price * item.quantity;
                total += priceAll;
                const cartItem = document.createElement("div");
                cartItem.innerHTML = new CartItem(item).getHtml(priceAll);

                const deleteButton = cartItem.querySelector(".delete-btn");
                deleteButton.addEventListener('click', () => this.delete(item));
                this.list.appendChild(cartItem);
            });
            const bill = document.createElement("div");
            bill.className = "total";
            bill.innerHTML = `<div class="to-sides"><div>Total:</div> <div>${total} MDL</div></div>`
            this.footer.innerHTML = `<button class="btn btn-primary" 
                                             data-bs-target="#exampleModalToggle2" 
                                             data-bs-toggle="modal" 
                                             data-bs-dismiss="modal"
                                             > Order </button>`
            this.list.append(bill);
        }
    }

    #removeAllChildNodes() {
        while (this.list.firstChild) {
            this.list.removeChild(this.list.firstChild);
        }
    }
}