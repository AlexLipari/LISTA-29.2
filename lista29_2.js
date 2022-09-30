class Cliente {
    #Nome
    #Cpf
    #DataNascimento
    constructor(nome, cpf, dataNascimento) {
        this.setNome(nome)
        this.setCpf(cpf)
        this.setDataNascimento(dataNascimento)
    }
    setNome(nome) {
        if (nome.length <= 50) {
            this.#Nome = nome
        } else {
            alert("Esse nome não é valido!")
        }
    }
    getNome() {
        return this.#Nome 
    }
    setCpf(cpf) {
        if (cpf.length <= 11) {
            this.#Cpf = cpf
        } else {
            alert("Esse cpf não é valido!")
        }
    }
    getCpf() {
        this.#Cpf 
    }
    setDataNascimento(dataNascimento) {
        this.#DataNascimento = dataNascimento
    }
    getDataNascimento(){
        return this.#DataNascimento
    }
}
class PacoteViagem {
    #Titular
    #PassagemIda
    #PassagemVolta
    #ValorTotal
    constructor(titular, passagemIda, passagemVolta, valorTotal) {
        this.setTitular(titular)
        this.setPassagemIda(passagemIda)
        this.setPassagemVolta(passagemVolta)
        this.setValorTotal(valorTotal)
    }
    setTitular(titular){
        this.#Titular = titular
    }
    getTitular(){
        return this.#Titular
    }
    setPassagemIda(passagemIda){
        this.#PassagemIda = passagemIda
    }
    getPassagemIda(){
        return this.#PassagemIda
    }
    setPassagemVolta(passagemVolta){
        this.#PassagemVolta = passagemVolta
    }
    getPassagemVolta(){
        return this.#PassagemVolta
    }
    setValorTotal(valorTotal){
        this.#ValorTotal = valorTotal
    }
    getValorTotal(){
        return this.#ValorTotal
    }

}
class Voo {
    #Empresa
    #Numero
    #Data
    #Horario
    #LocalPartida
    #LocalDestino
    constructor(empresa, numero, data, horario, localPartida, localDestino) {
        this.setEmpresa(empresa)
        this.setNumero(numero)
        this.setData(data)
        this.setHorario(horario)
        this.setLocalPartida(localPartida)
        this.setLocalDestino(localDestino)
    }
    setEmpresa(empresa) {
        this.#Empresa = empresa
    }
    getEmpresa() {
        return this.#Empresa 
    }
    setNumero(numero) {
        this.#Numero = numero
    }
    getNumero(){
        return this.#Numero
    }
    setData(data){
        this.#Data = data
    }
    getData(){
        return this.#Data
    }
    setHorario(horario){
        this.#Horario = horario
    }
    getHorario(){
        return this.#Horario
    }
    setLocalPartida(localPartida){
        this.#LocalPartida = localPartida
    }
    getLocalPartida(){
        return this.#LocalPartida
    }
    setLocalDestino(localDestino){
        this.#LocalDestino = localDestino
    }
    getLocalDestino(){
       return this.#LocalDestino 
    }

}
class PassagemAerea {
    #Assento
    #PrimeiraClasse
    #Valor
    #Passageiro
    #Voo
    constructor(assento, primeiraClasse, valor, passageiro, voo) {
        this.setAssento(assento)
        this.setPrimeiraClasse(primeiraClasse)
        this.setValor(this.CalcularValor(valor))
        this.setPassageiro(passageiro)
        this.setVoo(voo)
    }
    CalcularValor(valor) {
        if (this.PrimeiraClasse == true) {
            return valor * 1.5
        }
        return valor
    }
    ExibirResumo() {
        console.log("Passagem em nome de:", this.#Passageiro.getNome(), "No assento:", this.#Assento, "Do voo:", this.#Voo.getNumero(), "Com destino:", this.#Voo.getLocalDestino())
    }
    setAssento(assento) {
        this.#Assento = assento
    }
    getAssento() {
        return this.#Assento 
    }
    setPrimeiraClasse(primeiraClasse) {
        if (primeiraClasse == true || primeiraClasse == false) {
            this.#PrimeiraClasse = primeiraClasse
        } else {
            alert("Esse valor é invalido")
        }
    }
    getPrimeiraClasse() {
        return this.#PrimeiraClasse 
    }
    setValor(valor) {
        if (valor > 0) {
            this.#Valor = valor
        } else {
            alert("Valor invalido!")
        }
    }
    getValor() {
        return this.#Valor 
    }
    setPassageiro(passageiro) {
        this.#Passageiro = passageiro
    }
    getPassageiro() {
        return this.#Passageiro 
    }
    setVoo(voo) {
        this.#Voo = voo
    }
    getVoo() {
        return this.#Voo 
    }
}
let cliente = new Cliente("Sara", "22222200022", "20/07/2002")
let voo = new Voo("Azul", "200", "28/09/2022", "22:10", "São Paulo", "Natal")

let passagemAerea = new PassagemAerea(20, true, 1200, cliente, voo)
passagemAerea.CalcularValor()
passagemAerea.ExibirResumo()


