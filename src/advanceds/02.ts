class CpfValueObject {
    constructor(private readonly cpf: string) {
        this.validateCpf(cpf);
    }

    private validateCpf(cpf: string) {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if (!cpfRegex.test(cpf)) {
            throw new Error('Invalid CPF format. Expected format: XXX.XXX.XXX-XX');
        }
    }

    public getValue(): string {
        return this.cpf;
    }
}

enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    BLOCKED = 'blocked'
}

class User{
    constructor(
        public id: string,
        public name: string, 
        public email: string,
        public cpf: CpfValueObject,
        public password: string,
        public status: UserStatus = UserStatus.ACTIVE
    ) {}
}

const user = new User(
    '1',
    'John Doe',
    'john.doe@example.com',
    new CpfValueObject('123.456.789-01'),
    'password123',
    UserStatus.ACTIVE
);