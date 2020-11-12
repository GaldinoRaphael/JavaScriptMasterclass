const calculateArea = function(fn){
    return fn(Math.PI * Math.pow(this.radius, 2));
}

const circle = {
    radius: 10,
    calculateArea
}
// //Invoca a função passando o this pela função call e apply
// //Os outros parametros são passados por parametros na função
// console.log(calculateArea.call(circle, Math.round))

// //Apply os parametros devem ser passado por vetor
// console.log(calculateArea.apply(circle, [Math.ceil]))

//Define o this antes do tempo de execução
const calculateAreaForCircle = calculateArea.bind(circle)

console.log(calculateAreaForCircle(Math.round))

