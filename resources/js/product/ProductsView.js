import {Product} from "./Product.js";

export class ProductsView {

    tableHeader = `
    <table><tbody>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Description</th>
        <th>price</th>
        <th>Image</th>
        <th>Actions</th>
    </tr>`;

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

    showRows(products) {
        const div = document.getElementById("crudItems");
        if (products.length === 0) {
            div.innerHTML = `<div class="cart-empty"> Your cart is empty!</div><br>`;
        } else {
            div.innerHTML = this.tableHeader;

            products.forEach(item => {
                item = new Product(item);
                let itemRow = document.createElement("tr");
                itemRow.innerHTML = item.getHtmlRow();

                const deleteBtn = itemRow.querySelector(".delete");
                deleteBtn.addEventListener('click', () => this.action(item));

                div.appendChild(itemRow);
            });
        }
    }
}