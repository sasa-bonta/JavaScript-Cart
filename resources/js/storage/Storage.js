export class Storage {

    load(key) {
        try {
            localStorage[key] = localStorage[key] || JSON.stringify([])
            return JSON.parse(localStorage[key]);
        } catch (err) {
            return null;
        }
    }

    update(key, product) {
        let list = this.load(key);
        let index = list.findIndex(item => item.id === product.id); // add "+" ?

        if (index !== -1) {
            list[index] = product;
            localStorage[key] = JSON.stringify(list);
        } else {
            localStorage[key] = JSON.stringify(list.concat([product]));
        }
    }

    save(key, arr) {
        localStorage[key] = JSON.stringify(arr);
    }

    delete(key, product, productsView) {
        if (confirm("Delete this item?")) {
            let productsArr = this.load(key);
            let index = productsArr.findIndex(item => item.id === product.id);
            productsArr.splice(index, 1);
            this.save(key, productsArr);
            productsView.showRows(productsArr);
        }
    }
}