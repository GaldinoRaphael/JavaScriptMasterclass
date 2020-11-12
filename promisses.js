// As promises são objetos responsáveis por modelar comportamento assíncrono
//permitindo o seu tratamento de uma forma mais fácil e direta 

// function sum(a, b){
//     return new Promise(function(resolve, reject){
//         if(!a||!b) return reject("Input invalido");
//         setTimeout(function () {
//             resolve(a +b);
//         }, 1000); 
//     })
// }

// sum(2,2).then(function(a){
//     return sum(1,4).then(function(b){
//         return sum(a,b).then(function(result){
//             console.log(result);
//         })
//     })
// }).catch(function(e) {
//     console.log(e);
// });

function sum(a, b){
    return new Promise(function(resolve, reject){
        if(!a||!b) return reject("Input invalido");
        setTimeout(function () {
            resolve(a +b);
        }, Math.random() * 1000); 
    })
}
console.time("performance")
Promise.race([
    sum(2,2),
    sum(1,4),
    sum(5,4),
    sum(2,4)
]).then(function(value){
        console.log(value);
        let [a, b] = value;
        return sum(a, b).then(function(result){
            console.log(result)
            console.timeEnd("performance")
        })
}).catch(function(e) {
    console.log(e);
});