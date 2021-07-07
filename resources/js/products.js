let pizzasArray = [
    {
        name: "Affumicata",
        price: 95,
        image: "9c36508a696673f98fea8634a908d3ad.jpg",
    },
    {
        name: "Cheese&Spinach",
        price: 95,
        image: "15cda0097dd4bd4227af9247a663f935.jpg",
    },
    {
        name: "5 Cheese",
        price: 90,
        image: "d427104f35bfee2b727079d5e414df43.jpg",
    },
    {
        name: "Barbeque",
        price: 90,
        image: "38c60145ae43db28fe54f871e88d72ca.jpg",
    },
    {
        name: "Rancho",
        price: 88,
        image: "266518ecf029ceeec3b01c094c8ca7f0.jpg",
    },
    {
        name: "Prosciutto",
        price: 115,
        image: "e3d52e592e43fe7f522fe2ccb527db6f.jpg",
    },
    {
        name: "Pepperoni",
        price: 90,
        image: "6fe9ec1ff95274fb46723971624ede0b.jpg",
    },
    {
        name: "Margherita",
        price: 75,
        image: "38a8de519a66ddb36a5f650b87218890.jpg",
    },
];

let products = "";

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function array4Col(arr) {
    if (arr.length % 4 !== 0) {
        let obj = {};
        arr.push(obj);
        if (arr.length % 4 !== 0) array4Col(arr);
    }
}

array4Col(pizzasArray);

pizzasArray.forEach((pizza, index) => {
    if (index % 4 === 0) {
        products += `<div class="row">`;
    }

    products += !isEmpty(pizza) ?
        `<div class="col">
            <div class="card">
                <img src="images/pizzas/${pizza.image}" class="product-image" alt="${pizza.image}">
                 <h4>${pizza.name}</h4>
                 <button class="order" onclick="addToCart(${index});">${pizza.price} MDL                 order <i class="bi-cart-plus"></i></button>
            </div>
        </div>` : `<div class="col"></div>`;

    // ### Explicit if else
    // if (!isEmpty(pizza)) {
    //     products +=
    //     `<div class="col">
    //         <div class="card">
    //             <img src="images/pizzas/${pizza.image}" alt="${pizza.image}">
    //              <h4>${pizza.name}</h4>
    //              <button class="order">${pizza.price} MDL                 order <i class="bi-cart-plus"></i></button>
    //         </div>
    //     </div>`;
    // } else {
    //     products +=`<div class="col"></div>`;
    // }

    if (index % 4 === 3) {
        products += `</div>`
    }
})
document.getElementById('pizzas').innerHTML = products;

function addToCart(index) {
    let pizza = pizzasArray[index];
    console.log(pizza.name);
    console.log(pizza.price);
    console.log(pizza.image);
}