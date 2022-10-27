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

function* hello() {
    console.log("Lucas");
    yield 2;
    console.log("Silva");
    yield 3;
    console.log("Leoncio");
}

let it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());

function* testInfinity(){
    let number = 0;

    while(true){
        yield number;
        number++;
    }
}

const ats = testInfinity();

console.log(ats.next());
console.log(ats.next());
console.log(ats.next());
console.log(ats.next());

const objh = {
    values: [1,2,3,4],
    *[Symbol.iterator]() {
        for(var i = 0; i < this.values.length;i++){
            yield this.values[i];
        }
    }
};

for(let value of objh){
    console.log(value)
}

/* Callbacks */

function doSomething(callback){
    setTimeout(()=>{
        callback("Lucas, deu certo!")
    }, 1000);
}

const doOtherThing = (callback)=>{
    setTimeout(()=>{
        callback("Lucas Silva, é você?");
    }, 1500);
}

(function(){
    try {
        doOtherThing(function(data){
            var processedData = data.split("");

            try {
                doOtherThing(function(data2){
                    var processedData2 = data.split("");
        
                    try {
                        setTimeout(()=>{
                            console.log(processedData, processedData2);
                        });
                    } catch(err) {
                        console.log(err);
                    }
                });
            } catch(err){
                console.log(err);
            }
        });
    } catch(err){
        console.log(err);
    }
})();

/* Promises  */ 

// Pending
// Fulfilled
// Rejected

const myPromise = new Promise((resolved, reject)=>{
    // Modelo
});

const doSomethingPromise = new Promise((resolved, reject)=>{
    setTimeout(()=>{
        resolved("Lucas, deu certo!")
    }, 1000);
});

const doOtherThingPromise = new Promise((resolved, reject)=>{
    setTimeout(()=>{
        resolved("Lucas Silva, é você?");
    }, 1500);
});

doSomethingPromise.then(data => console.log(data));