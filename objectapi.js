
//Object API 
const javascript = Object.create({});

const criador = {nome:"Bredan Eich", influencedBy: "Java, Schem and Self"}

//Você consegue fazer a cópia de objetos

Object.assign(javascript, {
    name: "JavaScript",
    year: 1995,
    paadigm: "OO and Functional",
    creator: criador
})

console.log(javascript)

// delete Object.propriedade => deleta a propriedade do objeto

//Object.Defineproperty => define propriedades de maneira configurável. Você pode configurar se elas podem ser exbidas, excluidas ou re-atribuídas.

// Object.preventExtensions => Impede novas propriedades
// Object.seal => Impede apagar ou adicionar propriedades
// Object.freeze => impede qualquer alteração nas propriedades do objeto

