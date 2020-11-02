// Classe abstrata
import {Cliente} from "../Cliente.js";
export class Conta {

    constructor(saldoInicial, agencia, cliente) {
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata!");
        }
        this.Agencia = agencia;
        this.Cliente = cliente;
        this._Saldo = saldoInicial;
    }

    //Assessores
    set Cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._Cliente = novoValor;
        }
    }

    get Cliente() {
        return this._Cliente;
    }

    get Saldo() {
        return this._Saldo;
    }

    //Método abstrato
    Sacar(valor) {
        throw new Error("O método Sacar() da Conta é abstrato");
    }
    
    //Métodos
    _Sacar(taxa, valor){
        const valorSacado = taxa * valor;
        if (this._Saldo >= valorSacado) {
            this._Saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    Depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._Saldo += valor;
    }

    Tranferir(valor, conta) {

        const valorSacado = this.Sacar(valor);
        conta.Depositar(valorSacado);

    }
}