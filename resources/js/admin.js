import {Storage} from "./storage/Storage.js";
import {ProductsView} from "./product/ProductsView.js";

let storage = new Storage();
let storageProducts = storage.load("crud");
let productsView = new ProductsView({onBtnClick: (item) => storage.delete("crud", item, productsView)});
productsView.showRows(storageProducts);

