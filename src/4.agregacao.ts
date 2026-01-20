class User{
    constructor(  
        private name: string,
        private age : number,
        private address: Address[]
    ){}

    showAddresses(): void {
        this.address.forEach(addr => {
            console.log(`Street: ${addr.getStreet()}, Number: ${addr.getNumber()}`);
        });
    }
}

class Address{
    constructor(
        private street: string,
        private number?: number,
    ){}

    getStreet(): string {
        return this.street;
    }

    getNumber(): number | undefined {
        return this.number;
    }   
}   


const user1 = new User("Jean", 25, [
    new Address("Main St", 100),
    new Address("Second St"),
]);

user1.showAddresses();