import {ProductsView} from "./ProductsView.js"
import {Cart} from "./Cart.js"
import {products} from "./products.js";

const openCart = document.getElementById("cart-button");

let cart = new Cart();
let productsView = new ProductsView({onBtnClick: (product) => cart.addToCart(product)});
productsView.display(products);
new Cart().checkProductsAvailability().showCount();

openCart.addEventListener("click", (e) => {
    e.preventDefault();
    cart.displayCart();
});
