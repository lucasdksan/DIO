const multiply = (...args)=> args.reduce((acc, value) => acc * value, 1);

const test = (...rest)=>{
    return multiply.apply(undefined, rest);
}

const testV2 = (...rest)=>{
    return multiply(...rest);
}

const sumV2 = (...args)=>{
    return args.reduce((acc, value) => acc + value, 0);
};

/* Utilizando Arguments */

function sum(){
    let value = 0;

    for(var i=0; i< arguments.length; i++){
        value+=arguments[i];
    }

    return value;
}

console.log("V1: ", sum(10, 20, 50, 20));
console.log("V2: ", sumV2(10, 20, 50, 20));

/* Usando Spread Operator */

const str = "Minha mãe trabalha";
const arr = [1,2,3,4,5,6,7,8,9];
const arr2 = [...arr, 10,11,12,13,14,15,16,17,18,19];
const obj = {
    name: "Lucas da Silva",
    idade: 24,
    sexo: "M"
}
const obj2 = {
    ...obj,
    estado: "Rio Grande do Norte",
    uf: "RN",
    cidade: "Parnamirim"
}

function upper(){
    console.log(arguments);
}

function printScreen(){
    console.log()
}

upper(...str);

/* Symbols e Iterators */

const uniqueId = Symbol("Hello");
const uniqueId2 = Symbol();


Symbol.iterator;

const arrt = [1,2,3,4]; 
const str2 = "Lucas da Silva";

const objT = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: ()=>{
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

/* Generators */