export class CartItem {

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
                                   <div class="d-flex justify-content-between">
                                       <div>${this.name}:</div>
                                       <div>${this.quantity} pcs. </div>
                                       <div>${priceAll} MDL </div>
                                       <div class="w-25"></div>
                                       <button class="btn btn-danger delete-btn">
                                           <i class="bi-trash"></i>
                                       </button>
                                   </div>                            
                               </div><br>
        `;
    }
}