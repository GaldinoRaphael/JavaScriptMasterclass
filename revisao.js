let obj1 = {
    nome: "bob"
}

let obj2 = {
    nome: "ana"
}

function exibe(prefixo, sufixo){
    console.log(prefixo + this.nome + sufixo);
}

Reflect.apply(exibe, obj1, ["[(", ")]"])

