class ShoppingCart{
    constructor(){  
        this.cart=[]; 
    }

    getItems(){
        return this.cart;
    }

    addItem(name, quantity, pricePerUnit){
            this.cart.push({
                'name': name,
                'quantity': quantity,
                'pricePerUnit': pricePerUnit
            })
    }
    clear(){
      return this.cart=[]; // or return this.cart.length = 0;
    }
   
    total(){
        if(this.cart === []){
            return 0;
        }        
        return this.cart.reduce((totalAmount,currentItem) => {
          const totalCurrentItemPrice = currentItem.quantity*currentItem.pricePerUnit
          return  totalAmount + totalCurrentItemPrice;
        },0)
    }
}
module.exports = ShoppingCart 