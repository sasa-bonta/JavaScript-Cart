import {Product} from "./product/Product";
import {Storage} from "./storage/Storage";

const urlParams = new URLSearchParams(window.location.search);
const form = getEl('productForm');

let storage = new Storage();

function getEl(id) {
    return document.getElementById(id);
}

function getUrlParams() {
    getEl('idInput').value = urlParams.get("id") ?? "";
    getEl('name').value = urlParams.get("name") ?? "";
    getEl('description').value = urlParams.get("desc") ?? "";
    getEl('price').value = urlParams.get("price") ?? "";
    getEl('image').value = urlParams.get("image") ?? "";
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    let product = new Product({
        id: formData.get('id'),
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        image: formData.get('image'),
    });
    storage.update("crud", product);
    window.location.href = "admin.html";
});

getUrlParams();