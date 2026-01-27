class User{}

class CreateUserDTO{
constructor(
        public name: string,
    public email: string,
    public password: string,
    public role: string,
    public isActive: boolean,
    public document: string,
    ){}
}

class UserService{
    createUser(userDTO: CreateUserDTO): void{
        console.log("Usuário criado com sucesso!", userDTO);
    }   
}

const userService = new UserService();
userService.createUser(new CreateUserDTO(
    "Jean",
    "jean@example.com",
    "123456",
    "admin",
    true,
    "12345678900"
));