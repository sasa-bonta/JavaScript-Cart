class ProductsView {
    constructor({onBtnClick}) {
        this.div = document.getElementById("pizzas");
        this.action = onBtnClick;
    }

    load() {
        try {
            localStorage.crud = localStorage.crud || JSON.stringify([])
            return JSON.parse(localStorage.crud);
        } catch (err) {
            return null;
        }
    }

    display(products) {
        const row = document.createElement("div");
        row.className = "row";

        products.forEach((pizza) => {
            const col = document.createElement("div");
            col.className = "col col-12 col-sm-6 col-md-4 col-lg-3";
            col.innerHTML = new Product(pizza).getProductCard();

            // const button = document.querySelector(".btn-holder button");
            // button.addEventListener('click', () => this.action(pizza));
            row.appendChild(col);
        });


    }
}