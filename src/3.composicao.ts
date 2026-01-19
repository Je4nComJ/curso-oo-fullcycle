class User{
    constructor(  
        private name: string,
        private age : number,
        private address: Address,
    ){
        console.log(`User created: ${this.name}, Age: ${this.age}`);
        console.log(`Address: ${this.address.getstreet()}, ${this.address.getcity()}`);
    }
}

class Address{
    constructor(
        private street: string,
        private city: string,
        private number?: number,
    ){
        console.log(`Address created: ${this.street}, ${this.number ? this.number + ', ' : ''}${this.city}`);
    }

    getstreet(): string {
        return this.street;
    }

    getcity(): string {
        return this.city;
    }

    getnumber(): number | undefined {
        return this.number;
    }
}
const address1 = new Address("Main St", "Metropolis", 100);
const user1 = new User("Jean", 25, address1);