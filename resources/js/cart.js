localStorage.cart = JSON.stringify([]);
let cartProducts = JSON.parse(localStorage.cart);
let s3 = "&nbsp;&nbsp;&nbsp;";
let s6 = s3 + s3;

function addItemToCart(id) {
    let cartItem = cartProducts.find(item => item.id === id)
    if (cartItem === undefined) {
        let pizza = pizzasArray.find(pizza => pizza.id === id);
        let newItem = Object.assign({}, pizza);
        newItem.quantity = 1
        cartProducts.push(newItem)
    } else {
        cartItem.quantity++;
    }
}

function addToCart(id) {
    addItemToCart(id);
    localStorage.cart = JSON.stringify(cartProducts);
    console.log(cartProducts);
}

function displayCart() {
    let itemsToDisplay = "";
    let total = 0;
    cartProducts.forEach((item, index) => {
        let price = item.price * item.quantity;
        total += price;
        itemsToDisplay += `<img src="images/pizzas/${item.image}" class="cart-image" alt="item.name"> 
                           <div class="product-cart">${item.name}: ${s3} ${item.quantity} pcs. ${s6} ${price} MDL 
                           <button class="btn btn-danger delete-btn"><i class="bi-trash"></i></button>
                           </div> <br>`
    })
    itemsToDisplay += `<div class="total">Total:${s3} ${total} MDL</div><br>`;
    document.getElementById('cart-modal').innerHTML = itemsToDisplay;
}

function deleteItem() {

}
