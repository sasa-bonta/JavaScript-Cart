import {products} from "../products.js";

export class Product {
    constructor({id, name, price, description, image}) {
            this.id = id || this.#generateId();
            this.name = name;
            this.price = price;
            this.description = description;
            this.image = image;
    }

    getHtml() {
        return `
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
        `;
    }

    getHtmlRow() {
        return `
        <tr>
            <td>${this.id}</td>
            <td>${this.name}</td>
            <td>${this.description}</td>
            <td>${this.price}</td>
            <td>${this.image}</td>
            <td>
                <div class="d-inline-flex actions">
                    <a href="form.html?id=${this.id}&name=${this.name}&desc=${this.description}&price=${this.price}&image=${this.image}">
                        <button class="btn btn-warning"><i class="bi-pencil-square"></i></button>
                    </a>
                    <button class="btn btn-danger delete"><i class="bi-trash"></i></button>
                </div>
            </td>                        
        </tr>
        `;
    }

    #generateId() {
        return Math.max.apply(null,
            (products
                .map(obj => obj.id))
                .filter(id => id !== undefined)
        ) + 1;
    }
}