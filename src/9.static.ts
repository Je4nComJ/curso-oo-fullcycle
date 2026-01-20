class User{
    private static count = 0;
    constructor(public name:string){}

    static incrementCount(): number{
        return ++this.count;
    }
}

const user1 = new User("Jean");
console.log(user1.name);
User.incrementCount();
User.incrementCount();
console.log(User.incrementCount());
