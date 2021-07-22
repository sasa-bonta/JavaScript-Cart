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
        loadLocalStorageProducts();
        localStorage.crud = JSON.stringify(loadLocalStorageProducts().concat([this.#getProduct()]));
        console.log(this.#getProduct());
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

function deleteProduct(id) {
    if (confirm('Delete this item?')) {
        let storageProducts = loadLocalStorageProducts();
        let index = storageProducts.findIndex(item => item.id === id);
        storageProducts.splice(index, 1);
        localStorage.crud = JSON.stringify(storageProducts);
        location.reload();
    }
}

function displayProducts() {

    if (loadLocalStorageProducts().length !== 0) {
        let products = "";
        products += `<table><tbody>
                        <tr class="columns">
                             <th>Id</th>
                             <th>Name</th>
                             <th>Description</th>
                             <th>price</th>
                             <th>Image</th>
                             <th>Actions</th>
                        </tr>`;

        loadLocalStorageProducts().forEach(product => {
            products += `<tr>
                            <td>${product.id}</td>
                            <td>${product.name}</td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                            <td>${product.image}</td>
                            <td>
                                <div class="d-inline-flex actions">
                                    <a href="form.html?id=${product.id}&name=${product.name}&desc=${product.description}&price=${product.price}&image=${product.image}">
                                        <button class="btn btn-warning"><i class="bi-pencil-square"></i></button>
                                    </a>
                                    <button class="btn btn-danger" onclick="deleteProduct(${product.id});"><i class="bi-trash"></i></button>
                                </div>
                            </td>                        
                        </tr>`
        });

        products += `</tbody></table>`;
        document.getElementById('crudItems').innerHTML = products;
    }
}

displayProducts();
