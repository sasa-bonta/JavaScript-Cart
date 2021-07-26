import {Product} from "./product/Product.js";
import {Storage} from "./storage/Storage.js";

const urlParams = new URLSearchParams(window.location.search);
const id = document.getElementById('idInput');
const name = document.getElementById('name');
const desc = document.getElementById('description');
const price = document.getElementById('price');
const image = document.getElementById('image');

let storage = new Storage();

function getUrlParams() {
    id.value = urlParams.get("id") ?? "";
    name.value = urlParams.get("name") ?? "";
    desc.value = urlParams.get("desc") ?? "";
    price.value = urlParams.get("price") ?? "";
    image.value = urlParams.get("image") ?? "";
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let product = new Product({id: id.value, name: name.value, description: desc.value, price: price.value, image: image.value});
    storage.update("crud", product);
    window.location.href = "admin.html";
});

getUrlParams();