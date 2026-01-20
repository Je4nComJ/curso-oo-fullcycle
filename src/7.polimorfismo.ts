class User{
        constructor(
        public name: string,
        public age: number
    ){}

    getReportsEmployees(): void{
        console.log(`${this.name} Getting employees...`);
    }
}

class Manager extends User{}
class Employee extends User{

    getReportsEmployees(): void{
        console.log(`${this.name} is an Employee getting employees...`);
    }
}

class Admin extends User{
    getReportsAdmins(): void{
        console.log("Getting admins...");
    }
}

const manager = new Manager("Jean", 30);
manager.getReportsEmployees();

const admin = new Admin("Maria", 28);
admin.getReportsEmployees();
admin.getReportsAdmins();

const employee = new Employee("Pedro", 25);
employee.getReportsEmployees();
