export class Storage {

    load(key) {
        try {
            localStorage[key] = localStorage[key] || JSON.stringify([])
            return JSON.parse(localStorage[key]);
        } catch (err) {
            return null;
        }
    }

    save(key, product) {
        let list = this.load(key);
        let index = list.findIndex(item => item.id === product.id); // add "+" ?

        if (index !== -1) {
            list[index] = product;
            localStorage[key] = JSON.stringify(list);
        } else {
            localStorage[key] = JSON.stringify(list.concat([product]));
        }
    }
}