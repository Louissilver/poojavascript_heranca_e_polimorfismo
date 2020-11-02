export class Funcionario{
    constructor(nome, salario, cpf){
        this._Nome = nome;
        this._Salario = salario;
        this._CPF = cpf;

        this._Bonificacao = 1;
        this._Senha;
    }

    Autenticar(senha){
        return senha == this._Senha;
    }

    CadastrarSenha(senha){
        this._Senha = senha;
    }
}