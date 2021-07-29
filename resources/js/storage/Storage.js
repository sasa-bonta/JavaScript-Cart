/**
 * import muscula for loging errors
 */
import * as Muscula from "@muscula.com/muscula-webapp-js-logger";

Muscula.Init('xpobmbV4Iju');

export class Storage {

    load(key) {
        try {
            localStorage.setItem(key, localStorage.getItem(key) || JSON.stringify([]));
            return JSON.parse(localStorage.getItem(key));
        } catch (err) {
            Muscula.Error('Invalid json', err);
            return null;
        }
    }

    update(key, product) {
        console.log(product);
        let list = this.load(key);
        let index = list.findIndex(item => +item.id === +product.id); // add "+" ?

        if (index !== -1) {
            list[index] = product;
            localStorage.setItem(key, JSON.stringify(list));
        } else {
            localStorage.setItem(key, JSON.stringify(list.concat([product])));
        }
    }

    save(key, arr) {
        localStorage.setItem(key, JSON.stringify(arr));
    }

    delete(key, product, productsView) {
        let productsArr = this.load(key);
        let index = productsArr.findIndex(item => item.id === product.id);
        productsArr.splice(index, 1);
        this.save(key, productsArr);
        productsView.showRows(productsArr);
    }
}