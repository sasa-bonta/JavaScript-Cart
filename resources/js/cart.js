localStorage.cart = JSON.stringify([]);
let cartProducts = JSON.parse(localStorage.cart);

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
