class Item{
    constructor(
        public id: number,
        public name: string,
        public price: number
    ){}
}
 //Bad Code

// class Cart extends Array<Item>{
//     getTotal(): number{
//         return this.reduce((total, item) => total + item.price, 0);
//     }

//     addItem(item: Item): void{
//         this.push(item);
//     }
// }

class Cart{
    private items: Item[] = [];

    getTotal(): number{
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    addItem(item: Item): void{
        this.items.push(item);
    }
}