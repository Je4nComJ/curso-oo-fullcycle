// class ProdutoAnemico {
//     constructor(
//         public id: number,
//         public nome: string,
//         public preco: number,
//         public totalEstoque: number
//     ) {}
// }

class Produto {
    private static readonly MAX_ADD_ESTOQUE = 1000;
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public totalEstoque: number
    ){
        this.validate();
    }

    incrementarEstoque(qtd: number) : void {
        if(qtd > Produto.MAX_ADD_ESTOQUE){
            throw new Error("Quantidade inválida");
        }
        this.totalEstoque += qtd;
    }

    private validate() : void{
        if(this.preco <= 0){
            throw new Error("Preço inválido");
        }
        if(this.totalEstoque < 0){
            throw new Error("Estoque inválido");
        }
        if(this.nome.length === 0){
            throw new Error("Nome inválido");
        }
    }
}
