localStorage.cart = JSON.stringify([]);
let cartProducts = JSON.parse(localStorage.cart);

function addItemToCart(id) {
    let cartItem = cartProducts.find(obj => obj.itemId === id)
    if (cartItem === undefined) {
        let orderItem = {
            itemId: id,
            quantity: 1,
        }
        cartProducts.push(orderItem)
    } else {
        cartItem.quantity++;
    }
}

function addToCart(id) {
    addItemToCart(id);
    localStorage.cart = JSON.stringify(cartProducts);
    getProducts(cartProducts);
}

function getProducts(cartItems) {
    cartItems.forEach(item => {
        let pizza = pizzasArray.find(pizza => pizza.itemId === item.id);
        console.log(pizza);
        console.log(item.quantity);
    })
}