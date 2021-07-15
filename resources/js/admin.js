localStorage.crud = localStorage.crud !== undefined ? localStorage.crud : localStorage.crud = JSON.stringify([])
let productsList = JSON.parse(localStorage.crud);

console.log(productsList);

class Product {
    constructor() {
        this.name = this.valOf('name');
        this.price = this.valOf('price');
        this.description = this.valOf('description');
        this.image = this.valOf('image') !== "" ? this.valOf('image') : "no-image.png";

        if (this.valOf('image') === "") {
            this.image = "no-image.png";
        } else {
            this.image = this.valOf('image');
            this.saveImage();
        }
    }

    valOf(data) {
        return document.getElementById(data).value;
    }

    save() {
        productsList.push(this);
        localStorage.crud = JSON.stringify(productsList);
    }

    saveImage() {
        this.image.move
    }
}

document.querySelector('form').addEventListener('submit', (e) => {
    let product = new Product();
    product.save();
});