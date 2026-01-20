class User {
    constructor(
        private name: string,
        private age: number,
        private email: string,
        private password: string,
        private createdAt: Date,
        private updatedAt: Date
    ) {}

     getName(): string {
        return this.name;
    }

    setName(name: string): void {
        if (name.length < 3) {
            throw new Error("Name must be at least 3 characters long.");
        }
        this.name = name;
    }
}

const user = new User(
    "Jean",
    30,
    "jean@example.com",
    "securepassword",
    new Date(),
    new Date()
);

console.log(user.getName());
user.setName("Jean Updated");
console.log(user.getName());