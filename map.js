//Map é um objeto que aceita qualquer tipo de chaves e valores
const timeUnits = new Map([[8, 1], ["minutes", 60], ["hour", 3600]]);
//adiciona um novo par
timeUnits.set("day", 24 * timeUnits.get(8))

console.log(timeUnits)

//tamanho do map
console.log(timeUnits.size)

console.log("toString" in timeUnits)

import {Person} from "./"