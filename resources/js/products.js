import {Storage} from "./storage/Storage";

const pizzasArray = [
    {
        id: 0,
        name: "Sfintirea comenzii",
        price: 50,
        description: "Parintele Panteleu",
        image: "https://i2.wp.com/gaben.ro/wp-content/uploads/2013/07/sfintire.jpg?ssl=1",
    },
    {
        id: 1,
        name: "Affumicata",
        price: 95,
        description: "description",
        image: "images/pizzas/9c36508a696673f98fea8634a908d3ad.jpg",
    },
    {
        id: 2,
        name: "Cheese&Spinach",
        price: 95,
        description: "description",
        image: "images/pizzas/15cda0097dd4bd4227af9247a663f935.jpg",
    },
    {
        id: 3,
        name: "5 Cheese",
        price: 90,
        description: "description",
        image: "images/pizzas/d427104f35bfee2b727079d5e414df43.jpg",
    },
    {
        id: 4,
        name: "Barbeque",
        price: 90,
        description: "description",
        image: "images/pizzas/38c60145ae43db28fe54f871e88d72ca.jpg",
    },
    {
        id: 5,
        name: "Rancho",
        price: 88,
        description: "description",
        image: "images/pizzas/266518ecf029ceeec3b01c094c8ca7f0.jpg",
    },
    {
        id: 6,
        name: "Prosciutto",
        price: 115,
        description: "description",
        image: "images/pizzas/e3d52e592e43fe7f522fe2ccb527db6f.jpg",
    },
    {
        id: 7,
        name: "Pepperoni",
        price: 90,
        description: "description",
        image: "images/pizzas/6fe9ec1ff95274fb46723971624ede0b.jpg",
    },
    {
        id: 8,
        name: "Margherita",
        price: 75,
        description: "description",
        image: "images/pizzas/38a8de519a66ddb36a5f650b87218890.jpg",
    },
];

let products = pizzasArray.concat(new Storage().load("crud"));
export {products};