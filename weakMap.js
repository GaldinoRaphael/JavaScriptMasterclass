const wm1 = new WeakMap();

const obj1 = {};
const obj2 = {};
wm1.set(obj1, "obj1")
wm1.set(obj2, "obj2")
console.log(wm1.get(obj1))

//Quando o objeto é desfeito ele sai do WeapMap

obj2 = null;
console.log(wm1.get(obj1))


const rectangle1 = {
    x: 10,
    y: 2
}

const rectangle1 = {
    x: 5,
    y: 3
}

function calculateAer