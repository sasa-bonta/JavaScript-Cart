const urlParams = new URLSearchParams(window.location.search);
const id = document.getElementById('idInput');
const name = document.getElementById('name');
const desc = document.getElementById('description');
const price = document.getElementById('price');
const image = document.getElementById('image');

class Product {
    constructor() {
        this.id = this.#valOf('idInput') || this.#generateId();
        this.name = this.#valOf('name');
        this.price = this.#valOf('price');
        this.description = this.#valOf('description');
        this.image = this.#valOf('image') || "images/pizzas/no-image.png";
    }

    #valOf(data) {
        return document.getElementById(data).value;
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

function getUrlParams() {
    id.value = urlParams.get("id") ?? "";
    name.value = urlParams.get("name") ?? "";
    desc.value = urlParams.get("desc") ?? "";
    price.value = urlParams.get("price") ?? "";
    image.value = urlParams.get("image") ?? "";
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let product = new Product();
    product.save();
    window.location.href = "admin.html";
});

getUrlParams();