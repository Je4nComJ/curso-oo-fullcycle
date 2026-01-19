class User{
    private name: string;
    private age : number;

    constructor(name: string, age: number){ 
        this.name = name;
        if(this.isValidAge(age)){
            this.age = age;
        } else {
            throw new Error("Invalid age");
        }
        console.log(`User created: ${this.name}, Age: ${this.age}`);
    }

    changeAge(newAge: number): void {
        if(!this.isValidAge(newAge)){
            throw new Error("Invalid age");
        }
        this.age = newAge;
    }

    isValidAge(age: number): boolean {
        if(age <= 0 || age >= 120){
            return false;
        }
        return true;
    }
}
const user1 = new User("Jean", 25);
user1.changeAge(26);
console.log(user1);