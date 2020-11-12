const key1 = "bu";

const book = {
    title: "Clean Code",
    author: "Robert Martin",
    "number-of-pages": 464,
    language: "English",
    available: true
}
const book2 = {};

book["-key1"] = "10";

//Retorna as chaves
for (let key in book){
    book2[key] = book[key];
}
//=== comparação de tipo e valor

//object1 == object, o == vai verificar se o objeto é o mesmo. Ponteiro na memória

// delete book['-key1']
//Você consegue verificar se algum objeto tem um metódo através disso
// console.log("-key1" in book);

//O tipo undefined é retornado caso uma chave não seja encontrado - primitivo
let equal = true;

const book = {
    title: "Clean Code",
    author: "Robert Martin"
}

const book2 = {
    title: "Clean Code",
    author: "Robert Martin",
}
for(let key in book){
    console.log(book[key])
     if(book[key] !== book2[key]) equal = false
}

for(let key in book2){
    if(book[key] !== book2[key]) equal = false
}

console.log(equal)