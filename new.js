// //função fábrica retorna um novo objeto apartir de um molde
// //Cria uma função para ser herdada (compartilahda entre vários objetos)
// const personPrototype = {
//     getAge(){
//         return (new Date()).getFullYear() - this.year;
//     }
// }
// //Cria um objeto pessoa, seta o personPrototype como prototipo e retorna pessoa
// const createPerson = function(name, city, year) {
//     Person =  {
//         name,
//         city,
//         year,
//     }
//     Object.setPrototypeOf(Person,  personPrototype)
//     return Person;
// }


//Função construtora
const _new = function(fn, ...params){
    const obj = {};
    fn.apply(obj, params);
    Object.setPrototypeOf(obj, fn.prototype)
    return obj;
}

export const Person = function(name, city, year){
    this.name = name;
    this.city = city;
    this.year = year;
}

Person.prototype.getAge = function(){
    return (new Date()).getFullYear() - this.year;
}

const person1 = _new(Person, "Linus Torvalds", "Hellsink", 1969);
const person2 = _new(Person, "Bill Gates", "Seattle", 1995);

console.log(person1)
console.log(person2)
console.log(person1.__proto__ === person2.__proto__)
console.log(person2.__proto__)
console.log(person1.getAge())
console.log(person2.getAge())


