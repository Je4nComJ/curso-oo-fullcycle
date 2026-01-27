//TDA (Tell Don't Ask) - Principle that encourages objects to expose behavior rather than data.

// class Conta{
//     constructor(private saldo: number){}

//     public getSaldo(): number {
//         return this.saldo;
//     }

//     public setSaldo(valor: number): void {
//         this.saldo = valor;
//     }

// }

// const conta = new Conta(0);
// if(conta.getSaldo() >= 1000){
//     const saldoAtual = conta.getSaldo();
//     conta.setSaldo(saldoAtual - 1000);
// }

class Conta{
    constructor(private saldo: number){}

    public getSaldo(): number {
        return this.saldo;
    }

    public sacar(valor: number): void {
        if(this.saldo < valor){
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= valor;
    }
}

const conta = new Conta(0);
conta.sacar(1000);
