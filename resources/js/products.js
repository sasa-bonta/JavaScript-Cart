let s12 = s6 + s6;

let pizzasArray = [
    {
        id: 1,
        name: "Affumicata",
        price: 95,
        description: "description",
        image: "9c36508a696673f98fea8634a908d3ad.jpg",
    },
    {
        id: 2,
        name: "Cheese&Spinach",
        price: 95,
        description: "description",
        image: "15cda0097dd4bd4227af9247a663f935.jpg",
    },
    {
        id: 3,
        name: "5 Cheese",
        price: 90,
        description: "description",
        image: "d427104f35bfee2b727079d5e414df43.jpg",
    },
    {
        id: 4,
        name: "Barbeque",
        price: 90,
        description: "description",
        image: "38c60145ae43db28fe54f871e88d72ca.jpg",
    },
    {
        id: 5,
        name: "Rancho",
        price: 88,
        description: "description",
        image: "266518ecf029ceeec3b01c094c8ca7f0.jpg",
    },
    {
        id: 6,
        name: "Prosciutto",
        price: 115,
        description: "description",
        image: "e3d52e592e43fe7f522fe2ccb527db6f.jpg",
    },
    {
        id: 7,
        name: "Pepperoni",
        price: 90,
        description: "description",
        image: "6fe9ec1ff95274fb46723971624ede0b.jpg",
    },
    {
        id: 8,
        name: "Margherita",
        price: 75,
        description: "description",
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
        `<div class="col col-6 col-sm-6 col-xl-3">
            <div class="card">
                <img src="images/pizzas/${pizza.image}" class="product-image" alt="${pizza.image}">
                 <h4>${pizza.name}</h4>
                 <button onclick="addToCart(${pizza.id});">
                    <div class="price">
                        <div>${pizza.price} MDL</div> 
                        <div>order <i class="bi-cart-plus"></i></div>
                    </div>
                 </button>
            </div>
        </div>` : `<div class="col"></div>`;

    if (index % 4 === 3) {
        products += `</div>`
    }
})

document.getElementById('pizzas').innerHTML = products;
document.getElementById('items-count').innerHTML = countItems();
