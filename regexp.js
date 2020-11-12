// regExp.exec() = > retorna null caso não encontre o paramentro
// , retorna array em true: retorna a expressão o indice e o imput
// //RegExp => 
// ponto representa qualquer Character//
// \ => escapa os caracteres, desliga o comportamento de meta caracter, quantificador
// ^ - inicia com um determinado caracter 
// $ - Finaliza com um determinado caractere
//[abc] - Aceita
//[^abc] - não aceita
//{n} - quantifica numero especifico
//{n, } - quantifica numero minimo
//{n,m} = minimo e maximo
//+ - no mínimo um
//? -zero ou um
//* - zero ou mais
// \w [a-zA-Z0-9]
// \W [^a-zA-Z0-9]
// \d = [0-9]
// D = [^0-9]
// s- espaço em branco
// S - representa um não espaço em branco
// n - representa quebra de linha
// \t - Representa tab
// (exp){n} - repete a expressão - n vezes
// () - retorna uma parte especifica num espaço do vetor

let regExp = /^\s\w{4}@hotmail.com/;
let result = regExp.exec(" 1234@hotmail.com")
console.log(result)