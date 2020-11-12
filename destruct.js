// const language = "C;Denis Ritchie;1972".split(";")
// const [name = "-", author = "-", year = "-"] = language;
// console.log(name, author, year);

const language = {
    name: "C",
    author: "Dannis Ritchie",
    year: 1975,
    company: {
        name: "Bell Labs"
    }
}

//destruction de um objeto reatribuindo nomes
const {name : n, author : a, year : y, company:{name: nc}} = language
console.log(n, a, y, nc)

//Destruct um objeto
const sum = function({a,b}){
    return a + b;
}
console.log(sum({a: 3, b: 5}))

const languages = ["C", "Python", "Java"]
console.log(languages)
//Push retona o length
console.log(languages.push("Ruby"));
console.log(languages)
//pop retorna o elemento retirado
console.log(languages.pop())
console.log(languages.unshift("JS"));
console.log(languages)
//shift tira do ínicio e unshift põe
console.log(languages.shift())

//splice retorna o vetor
console.log(languages.splice(1,1))
console.log(languages.splice(1, 0, "C++", "C#"))
console.log(languages.splice(1, 2, "C"))
console.log(languages)



//elementos vazios são considerados no length