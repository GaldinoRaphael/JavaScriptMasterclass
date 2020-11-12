// const sum = (a = 1, b = 1) => a + b;

// //Quando tira as chaves o retorno é automático
// const sub = (a = 1, b = 1) => a - b;

// const calculadora = fn => (a,b) => fn(a,b);

// // const calculadora = function(fn){
// //     return function(a,b) {
// //         return fn(a,b)
// //     };
// // };
// //Invoca a função que é retornada de calculadora passando os paramêtros A e B
// console.log(calculadora(sum)(5, 4))

// //Ela não invoca o metódo this


const sum = () => {
    let total = 0;
    for(let argument in arguments){
        total += arguments[argument]
    }

    return total;
}

console.log(sum(1,2,3,4,5,6,7,8))

//Uma função construtora que recebe como aprametro nome, cidade e ano e retorna um objeto que deve ser entre
//parenteses com a short notation das proprietes name, city, year
const createPerson = (name, city, year) => ({name, city, year})
const raphael = createPerson("raphael", "divinoia", 1996)
console.log(raphael)