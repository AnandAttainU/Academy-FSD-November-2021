class WishList {
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
}

export var someVar = 200;