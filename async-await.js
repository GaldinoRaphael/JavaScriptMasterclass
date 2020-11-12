// //async/await facilita a interação de chamadas asincronas

function sum(a, b){
    return new Promise(function(resolve, reject){
        if(!a || !b) return reject("invalid input");
        setTimeout(() =>{
            resolve(a + b);
        }, 1000);
    });
}

// console.time("performance");
// (async function(){
//     try{
//         const a = await sum(1,2);
//         const b = await sum(a);
//         const result = await sum(a,b);
//         console.log(result)
//         console.timeEnd("performance")
//     } catch(e){
//         console.log(e)
//     }
// })();

//async/await facilita a interação de chamadas asincronas

// function sum(a, b){
//     return new Promise(function(resolve, reject){
//         if(!a || !b) return reject("invalid input");
//         setTimeout(() =>{
//             resolve(a + b);
//         }, 1000);
//     });
// }
// console.time("performance");
// (async function(){
//     try{
//         const a = await sum(1,2);
//         const b = await sum(a);
//         const result = await sum(a,b);
//         console.log(result)
//         console.timeEnd("performance")
//     } catch(e){
//         console.log(e)
//     }
// })();

(async function(){
    try{
        const functions = [
            sum(1,2),
            sum(3, 1)
        ]
        const results = [];
        for await(let result of functions){
            results.push(result);
        }

        const [a,b] =  results;
        const result = await sum(a,b);
        console.log(resul)
    } catch(e){
        console.log(e)
    }
})();


