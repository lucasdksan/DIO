class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo; 
        this._saldo = saldo;
    }

    get Saldo(){
        return this._saldo;
    }

    set Saldo(inSaldo) {
        this._saldo = inSaldo;
    }

    sacar(value){
        if(this._saldo > value){
            this._saldo = this._saldo - value;
            console.log(`Seu valor atual: ${this._saldo} R$`);
        } else {
            console.log("Saldo insuficiente");
        }
    }

    depositar(value){
        this._saldo = this._saldo + value;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this._cartaoCredito = cartaoCredito;
        this.tipo = "conta corrente";
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(value){
        this._cartaoCredito = value;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = "conta Poupança";
    }

    get Saldo(){
        return this._saldo;
    }

    set Saldo(inSaldo) {
        this._saldo = inSaldo;
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this._cartaoCredito = cartaoCredito;
        this.tipo = "conta universitária";
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(value){
        this._cartaoCredito = value;
    }

    saque(value){
        if(value < 500){
            if(this._saldo > value){
                this._saldo = this._saldo - value;
                console.log(`Seu valor atual: ${this._saldo} R$`);
            } else {
                console.log("Saldo insuficiente");
            }
        } else {
            console.log("Valor desejado passou do seu limite de R$500");
        }
    }
}