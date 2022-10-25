# DIO

Repo que contém notas e exercícios de cursos DIO.

## Descrição:

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

Este curso se concentra em revisar/ensinar os conceitos básicos do ES6.

- Funções Avançadas (Arrow Functions, Default Function Arguments, Enhaced Object Literals)
- Aplicando conceitos (Rest, Spread Operator, Destructuring)
- Introdução a Generators (Symbols, Iterators e Generators)
- Aplicando conceitos Promises e Fetch (Callbacks, Promises, Fetch, Async/Await, EventEmitter)
- Conceitos aplicados a qualidade de códico e automação de testes em JS (Testes, TDD, BDD, Mocha, Chaim e Sinon)

-> Funções Avançadas:

* Arrow Functions:

Antes do ES6 as funções eram efetuadas da forma padrão:

```
function test(a){
    cosnole.log(a);
} ou 

function(){

}

(funciton(){

})();

```

Elas são a maneira mais simples de executar funções, mas seu uso pode tornar o código mais detalhado em relações de função simples e compactas, por exemplo:

```
function soma(a,b){
    return a + b;
}

var result = soma(1,2);

console.log(result);
```

Nesse caso, as arrows functions conseguem reduzir e deixar eles mais simples:

```
const soma = (a,b)=>{
    return a + b;
}

var result = soma(1,2);

console.log(result);
```

Além disso, podemos deixar eles mais simples ainda quando a função é pequeno:

```
const soma = (a,b) => a + b;

var result = soma(1,2);

console.log(result);
```

Seu valor de this é definido à partir das funções onde foram definidas.

```
const soma = (a, b) => a + b;
```

* Default Function Arguments:

Antes, para deixar argumentos com um valor padrão caso não fosse definido durante o processo de desenvolvimento, eles eram feitos da seguinte forma:

```
function multiply(a,b){
    b = typeof b === "undefined" ? 1 : b;

    return a * b;
}

/* ou */

function multiply(a,b){
    if(typeof b === "undefined"){
        b = 1;
    }

    return a * b;
}
```

Agora com o ES6 é possivel deixar o valor pré setado sem esse forma verbosa:

```
const multiply = (a, b = 1) => a * b;
```

Isso sendo capaz de relacionar um valor do argumento com outro, claro que para isso a variável deve ser declarada primeiro.

```
const multiply = (a, b = a) => a * b; //Correto
const multiply = (b = a, a) => a * b; //Errado
```

* Enhaced Object Literals:

É usado para agrupar variáveis ​​do escopo global e transformá-las em objetos javascript. É o processo de reestruturação ou recomposição. Saída: O nome, cor e idade agora são chaves do objeto.

```
const a = "Lucas";

const obj = {
    a,
    b: 15,
}
```

-> Aplicando conceitos: