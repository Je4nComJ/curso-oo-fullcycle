class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}
}

class Sale {
    constructor(
        public id: number,
        public productName: string,
        public clientName: string,
        public clientEmail: string,
        public clientDocument: string,
        public paymentPix: string,
        public products: Product[],
        public quantity: number
    ) {}
}