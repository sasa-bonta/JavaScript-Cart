import {Storage} from "./storage/Storage";
import {ProductsView} from "./product/ProductsView";

let storage = new Storage();
let storageProducts = storage.load("crud");
let productsView = new ProductsView({onBtnClick: (item) => storage.delete("crud", item, productsView)});
productsView.showRows(storageProducts);

const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");

error1.addEventListener('click', () => {
    localStorage.test = '["Hello", 3.14, true, "name": "Joe"]';
    let ninune = storage.load("test");
    console.log(ninune);
});

error2.addEventListener('click', () => {
    productsView.showRows();
});
