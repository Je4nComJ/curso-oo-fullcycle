class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}
}

type SaleItem = {
    product: Product;
    quantity: number;
};

class Client{
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public document: string
    ) {}
}

class Address{
    constructor(
        public number: string,
        public complement: string,
        public city: string,
        public state: string
    ) {}
}

class PaymentPix{
    constructor(
        public id: string,
        public amount: number,
        public date : Date
    ) {}
}

class Sale {
    public id: string;
    constructor(
        public productName: string,
        public client: Client,
        public address: Address,
        public paymentPix: PaymentPix,
        public products: SaleItem[],
    ) {
        this.id = this.generateId();
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}

const sale = new Sale(
    "Sale of electronics",
    new Client(1, "John Doe", "john.doe@example.com", "12345678901"),
    new Address("123", "Apt 4B", "New York", "NY"),
    new PaymentPix("pix_key_123", 100.0, new Date()),
    [
        { product: new Product(1, "Laptop", 1000), quantity: 1 }
    ]
);