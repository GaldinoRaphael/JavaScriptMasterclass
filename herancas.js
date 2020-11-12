//Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.

const functionalLanguage = {
    paradigm: "Functional"
}

const scheme = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguage
}

const javascript = {
    name : "JavaScript",
    year: 1995,
}
Object.setPrototypeOf(javascript, functionalLanguage)

console.log(scheme.paradigm);
console.log(javascript.paradigm)

for (let key in scheme){
    console.log(key, scheme.hasOwnProperty(key))
}

//a referencia __proto__ em object(raiz) é null

//Object.create(param) => param você consegue definir o prototype

const c = Object.create(functionalLanguage);

c.name = "C";
c.year = 1960;

console.log(c.paradigm)

//Object.create(null) cria um objeto que não tem o prototipo
//Object.create({}}) herda do próprio objeto

//caso o objeto tenha uma somba você pode acessar javascript.__proto__.chave, assim você acessa o valor do prototipo
