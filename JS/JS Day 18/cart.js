export default class Cart {
    constructor() {
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
    }
    removeItem(item) {
        this.items.pop(this.items.indexof(item));
    }
    removeAllItems() {
        this.items = []
    }
    moveToWishlist(item) {
        wishList.addItem(item);
        this.removeItem(item);
    }
}

export var someItem = "random String";

export function add(n1, n2) {
    return n1+n2;
}