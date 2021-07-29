export class CartItem {

    s3 = "&nbsp;&nbsp;&nbsp;";

    constructor({id, name, price, description, image, quantity}) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.quantity = quantity;
    }

    getHtml(priceAll) {
        return `
        <img src="${this.image}" class="cart-image" alt="item.name"> 
                               <div class="product-cart">
                                   ${this.name}: ${this.s3}
                                   ${this.quantity} pcs. 
                                   ${this.s3 + this.s3} ${priceAll} MDL 
                                   <button class="btn btn-danger delete-btn">
                                       <i class="bi-trash"></i>
                                   </button>
                               </div><br>
        `;
    }
}