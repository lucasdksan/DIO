# DIO

Repo que contém notas e exercícios de cursos DIO.

# Descrição:

Meu propósito de estudar na plataforma DIO é rever conceitos importantes de programação web e aprender coisas novas usando seus vídeos curtos e com professores que já atuam no mercado de trabalho.

Até agora fiz dois cursos, Orientação a Objetos com JavaScript e trabalhando com componentes em React js.

* Orientação a Objetos com JavaScript:

Este curso tem como foco revisar/ensinar os princípios do paradigma "Orientação a Objetos" em javascript.
Um exemplo é a utilização de class para criar um objeto, exemplo:

```markdown
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
```

* Trabalhando com Componentes em React:

Este curso focou mais nos conceitos de componentização no React, desde de propriedades até as chamadas.

* Desenvolvimento avançado com JavaScript ES6: