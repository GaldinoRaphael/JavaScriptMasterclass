
//JSON.stringfy => transforma elementos em string json
//JSON.parse faz o caminho inverso do stringfy

//Para comparar dois objetos você pode converter os dois objetos para JSON e comparar com um bolleano.

//const object1 = object2, os dois objetos apontam para o mesmo endereço de memória.

const book2 = {
    name: "refactoring",
    author: "Martin C. Fowler"
}

const book3 = JSON.parse(JSON.stringify(book2));

console.log(book3 === book2);