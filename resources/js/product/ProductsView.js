import {Product} from "./Product.js";

export class ProductsView {
    constructor({onBtnClick}) {
        this.div = document.getElementById("pizzas");
        this.action = onBtnClick;
    }

    display(products) {
        const row = document.createElement("div");
        row.className = "row";

        products.forEach((pizza) => {
            const col = document.createElement("div");
            col.className = "col col-6 col-sm-6 col-md-4 col-lg-3";
            col.innerHTML = new Product(pizza).getHtml();

            const button = col.querySelector(".btn-holder button");
            button.addEventListener('click', () => this.action(pizza));
            row.appendChild(col);
        });
        document.getElementById('pizzas').appendChild(row);
    }

    // showRows(products) {
    //
    // }
}