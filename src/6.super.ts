class User{
    constructor(
        public name:string, 
        public age:number,
        public email:string,
        public password:string
    ){}
}

class Manager extends User{
    constructor(
        name:string, 
        age:number,
        email:string,
        password:string,
        public role:string = "manager"
    ){
        super(name, age, email, password);
    }
}
class Admin extends User{}

const manager = new Manager("Alice", 30, "alice@example.com", "password123");
console.log(manager);
const super_manager = new Manager("Bob", 40, "bob@example.com", "password456", "super_manager");
console.log(super_manager);