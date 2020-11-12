const sum = function(a = 1, b = 1){
    return a + b;
}

const sub = function(a = 1, b = 1){
    return a - b;
}

const calculadora = function(fn){
    return function(a,b) {
        return fn(a,b)
    };
};

console.log(calculadora(sum)(2,2))
console.log(calculadora(sub)(2))

//Arguments é um objeto, não precisa ser passado por parametro
const arg = function(){
    let total = 0;
    for(let argument in arguments){
        total += arguments[argument];
    }
    return total;
}


console.log(arg(1,2,3,4,5,6,7,8,9));

//acumula em um array
//O rest param tem que vir por ultimo parametro

const restParam = function(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}
console.log(restParam(1,2,3,4,5,6,7))

const calculateArea = function(){
    return this.x * this.y;
}
const rectangle = 
{
    x: 10,
    y: 5,
    calculateArea
}

console.log(rectangle.calculateArea());

