const frameworks = ["Vue.js", "Angular.js", "Ember.js"]
//filter retorna todos os elementos que dá true para a função
const result = frameworks.filter((framework) => framework.contributors < 1000)
console.log(result)

//Find retorna o primeiro elemento
const resultFirst = frameworks.find((framework) => framework.contributors < 1000)
console.log(resultFirst)

//Some retorna true se um ou mais elementos retornam true na função passada
//Every retorna true se todos os elementos retornam true na função passada
const resultSome = frameworks.some((framework) => framework.contributors < 1000)
console.log(resultSome)

//retorna um array apartir do retorno da função
const resultMap = frameworks.map((framework) => framework.name)
console.log(resultMap)

//opera matematicamente sobre cada elemento. Passa o número e o vetor, função e função de inicialização 
const resultReduce = frameworks.reduce((total, framework) => {return total + framework.contributors}, 0)
console.log(resultReduce)

//IndexOf retorna a posição da primeira ocorrencia
//LastIndexOf retorna a ultima ocorrência do elemento
//Include retorna true se o lemento existe
//Concat concatena arrays e retorna o resultante
//Slice retorna partes de um determinado array com a posição de ínicio e fim.
//Caso você passe só um número como aprametro ele retorna deste até o fim
//Join => converte o array apra uma string, juntando os elementos com base num separados

console.log(frameworks.join(";"))