class Database{
    private static instance: Database;
    private constructor(){
        console.log(`Connected to database`);
    }

    public static getInstance(): Database{
        if(!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public runQuery(query: string): void{
        console.log(`Running query: ${query}`);
    }
}

const db = Database.getInstance();

db.runQuery("SELECT * FROM users");
db.runQuery("SELECT * FROM products");
db.runQuery("SELECT * FROM orders");