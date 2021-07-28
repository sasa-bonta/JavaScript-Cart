import {ProductsView} from "./product/ProductsView.js"
import {Cart} from "./cart/Cart.js"
import {products} from "./products.js";
import {CartView} from "./cart/CartView.js";

const openCart = document.getElementById("cart-button");

let cart = new Cart({deleteBtn: (cartItem) => cart.deleteItem(cartItem)});
let productsView = new ProductsView({onBtnClick: (product) => cart.addToCart(product)});
productsView.display(products);
let cartView = new CartView(cart);
cart.checkProductsAvailability().showCount();

openCart.addEventListener("click", (e) => {
    e.preventDefault();
    cartView.display(cart.loadCartArray());
});
