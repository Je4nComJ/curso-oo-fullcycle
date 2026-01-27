class Item{
    constructor(
        public id: number,
        public name: string,
        public price: number
    ){}
}

class Cart{
    private items: Item[] = [];

    getTotal(): number{
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    addItem(item: Item): void{
        this.items.push(item);
    }

    removeItem(itemId: number): void{
        this.items = this.items.filter(item => item.id !== itemId);
    }

    clear(): void{
        this.items = [];
    }
}