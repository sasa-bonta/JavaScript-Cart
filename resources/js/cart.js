localStorage.cart = localStorage.cart || JSON.stringify([])
let cartProducts = JSON.parse(localStorage.cart);
let s3 = "&nbsp;&nbsp;&nbsp;";

function countItems() {
    let itemsCount = 0;
    cartProducts.forEach(prod => {
        itemsCount += prod.quantity;
    })
    return itemsCount;
}

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
    document.getElementById('items-count').innerHTML = countItems();
    localStorage.cart = JSON.stringify(cartProducts);
}

function displayCart() {
    let itemsToDisplay = "";
    let total = 0;
    if (!isEmpty(cartProducts)) {
        cartProducts.forEach(item => {
            let price = item.price * item.quantity;
            total += price;
            itemsToDisplay += `<img src="${item.image}" class="cart-image" alt="item.name"> 
                               <div class="product-cart">
                                   ${item.name}: ${s3} ${item.quantity} pcs. ${s3,s3} ${price} MDL 
                                   <button class="btn btn-danger delete-btn" onclick="deleteItem(${item.id})">
                                       <i class="bi-trash"></i>
                                   </button>
                               </div><br>`
        })
    } else {
        itemsToDisplay += `<div class="cart-empty"> Your cart is empty!</div><br>`;
        document.getElementById('modal-footer').innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;
    }
    document.getElementById('cart-modal').innerHTML = itemsToDisplay;
}

function deleteItem(id) {
    let index = cartProducts.findIndex(item => item.id === id);
    cartProducts.splice(index, 1);
    localStorage.cart = JSON.stringify(cartProducts);
    document.getElementById('items-count').innerHTML = countItems();
    displayCart()
}

function updateCart() {
    cartProducts.forEach(product => {
        if (pizzasArray.find(pizza => pizza.id === product.id) === undefined) {
            deleteItem(product.id);
        }
    });
}
