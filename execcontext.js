// const obj1 = {
// p1: 10,
// getP1: function() {
//     const fn1 = () => {
//         return this.p1;
//     }
//     return fn1();
// }
// }


// console.log(obj1.getP1());

const obj1 = {};

// for (var v1 = 0; v1 < 3; v1++){
//     //prende a variável no escopo interno quando é criado uma varíavel a mais
//     obj1[v1] = (function (v2) {
//         return function () {
//             console.log(v2);
//         }
//     })(v1);  
// }

for (var v1 = 0; v1 < 3; v1++){
    //prende a variável no escopo interno quando é criando um objeto v2 dinamicamente
    obj1[v1] = (function () {
        console.log(this.v2);
        }).bind({v2:v1})  
}

obj1[0]();
obj1[1]();
obj1[2]();

