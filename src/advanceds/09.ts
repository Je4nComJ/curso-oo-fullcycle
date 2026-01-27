class Pessoa {
    private _idade: number;

    constructor(idade: number) {
        this._idade = idade;
        this.validarIdade();
    }

    get idade(): number {
        return this._idade;
    }
    
    set idade(valor: number) {
        this._idade = valor;
        this.validarIdade();
    }

    validarIdade(): void {
        if (this._idade < 0 || this._idade > 120) {
            throw new Error("Idade inválida");
        }
    }
}

const pessoa = new Pessoa(25);
console.log(pessoa.idade); // 25
pessoa.idade = 30;
console.log(pessoa.idade); // 30
// pessoa.idade = -5; // Lança erro: Idade inválida