import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta {
    static NumeroDeContasCorrentes = 0;

    constructor(agencia, cliente) {
        super(0, agencia, cliente);
        ContaCorrente.NumeroDeContasCorrentes += 1;
    }

    //Sobreescrevendo o comportamento de Sacar da classe pai
    Sacar(valor){
        let taxa = 1.1;
        return this._Sacar(taxa, valor);
    }
}