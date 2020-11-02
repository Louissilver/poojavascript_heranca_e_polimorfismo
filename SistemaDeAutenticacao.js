export class SistemaAutenticacao {
    static Login(autenticavel, senha) {
        if (SistemaAutenticacao.EhAutenticvel(autenticavel)) {
            return autenticavel.Autenticar(senha);
        }
        return false;
    }

    static EhAutenticvel(autenticavel){
        return "Autenticar" in autenticavel && autenticavel.Autenticar instanceof Function;
    }
}