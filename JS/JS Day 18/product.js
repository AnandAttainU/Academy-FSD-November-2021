class Product {
    constructor(nam, priceVal){
        this._name = nam;
        this._price = priceVal;
    }

    get price(){
        return this._price;
    }

    get name(){
        return this._name;
    }

    set name(nam){
        this._name = nam;
    }

    set price(amount){
        this._price = amount;
    }
}

export class Payment {

}

var someVar = 100;

export {Product, someVar}