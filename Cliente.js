export class Cliente {
    constructor(nome, cpf, senha) {
        this.Nome = nome;
        this._CPF = cpf;
        this._Senha = senha;
    }
 
    get CPF() {
        return this._CPF;
    }
}