import "./Product"

class ProductsView {
    constructor({ onBtnClick }) {
        this.div = document.getElementById("pizzas");
        this.action = onBtnClick;
    }

    displayProducts(products) {
        const row = document.createElement("div");
        row.className = "row";

        products.forEach((pizza) => {

        });
    }
}