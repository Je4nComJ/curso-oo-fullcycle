class User{
    name: string;
    age : number;

    constructor(name: string, age: number){ 
        this.name = name;
        this.age = age;
        console.log(`User created: ${this.name}, Age: ${this.age}`);
    }
}
const user1 = new User("Jean", 25);