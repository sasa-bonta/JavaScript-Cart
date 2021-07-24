class Product {
    constructor({id, name, price, description, image}) {
        if (arguments.length === 0) {
            this.id = this.#valOf('idInput') || this.#generateId();
            this.name = this.#valOf('name');
            this.price = this.#valOf('price');
            this.description = this.#valOf('description');
            this.image = this.#valOf('image') || "images/pizzas/no-image.png";
        } else {
            this.id = id;
            this.name = name;
            this.price = price;
            this.description = description;
            this.image = image;
        }
    }

    save() {
        let storageProducts = loadLocalStorageProducts();
        let index = storageProducts.findIndex(item => +item.id === +this.id);

        if (index !== -1) {
            storageProducts[index] = this.#getProduct();
            localStorage.crud = JSON.stringify(storageProducts);
        } else {
            localStorage.crud = JSON.stringify(storageProducts.concat([this.#getProduct()]));
        }
    }

    getProductCard() {
        return `
        <div class="col col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card text-white h-100">
                <img src="${this.image}" class="product-image" alt="${this.image}">
                <h4>${this.name}</h4>
                <div class="btn-holder">
                    <button class="w-100">
                        <div class="to-sides">
                            <div>${this.price} MDL</div> 
                            <div>order <i class="bi-cart-plus"></i></div>
                        </div>
                   </button>
                </div>
            </div>
        </div>
        `;
    }

    #valOf(data) {
        return document.getElementById(data).value;
    }

    #getProduct() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            description: this.description,
            image: this.image,
        }
    }

    #generateId() {
        return Math.max.apply(null,
            ((pizzasArray.concat(loadLocalStorageProducts()))
                .map(obj => obj.id))
                .filter(id => id !== undefined)
        ) + 1;
    }
}