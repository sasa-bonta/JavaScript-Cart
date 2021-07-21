class Product {
    constructor() {
        this.id = this.generateId();
        this.name = this.valOf('name');
        this.price = this.valOf('price');
        this.description = this.valOf('description');
        this.image = this.valOf('image') || "images/pizzas/no-image.png";
    }

    valOf(data) {
        return document.getElementById(data).value;
    }

    save() {
        loadLocalStorageProducts();
        localStorage.crud = JSON.stringify(loadLocalStorageProducts().concat([this.getProduct()]));
        console.log(this.getProduct());
    }

    getProduct() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            description: this.description,
            image: this.image,
        }
    }

    generateId() {
        return Math.max.apply(null,
            ((pizzasArray.concat(loadLocalStorageProducts()))
                .map(obj => obj.id))
                .filter(id => id !== undefined)
        ) + 1;
    }
}

document.querySelector('form').addEventListener('submit', (e) => {
    let product = new Product();
    product.save();
});