import {
    Cliente
} from "./Cliente.js";
import {
    ContaCorrente
} from "./Conta/ContaCorrente.js";
import {
    ContaPoupanca
} from "./Conta/ContaPoupanca.js";
import {
    ContaSalario
} from "./Conta/ContaSalario.js";
import {
    Gerente
} from "./Funcionarios/Gerente.js";
import {
    Diretor
} from "./Funcionarios/Diretor.js";
import {
    SistemaAutenticacao
} from "./SistemaDeAutenticacao.js";

// Clientes
const cliente = new Cliente("Ricardo", 11122233309);

// Contas 
const contaCorrente = new ContaCorrente("1001", cliente);
const contaPoupanca = new ContaPoupanca(100, "1001", cliente);
const contaSalario = new ContaSalario(cliente);

// Ações
contaCorrente.Depositar(500);
contaCorrente.Sacar(100);
contaSalario.Depositar(1000);
contaSalario.Sacar(100);

// Exibição
console.log(contaCorrente);
console.log(contaPoupanca);
console.log(contaSalario);

// Funcionários
const diretor = new Diretor("Luís", 1800, "11122233309");
const gerente = new Gerente("Kêmilly", 1500, "22233344409");
const cliente1 = new Cliente("Fernando", "55544433309", "123456789");

// Senhas
diretor.CadastrarSenha("123456789");
gerente.CadastrarSenha("123456789");

// Autenticação
const diretorEstaLogado = SistemaAutenticacao.Login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.Login(gerente, "123456789");
const clienteEstaLogado = SistemaAutenticacao.Login(cliente1, "123456789");

// Exibição
console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);