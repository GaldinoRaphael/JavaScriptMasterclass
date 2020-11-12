function createArray()
{
    return new Proxy({},{
        set(target, key, value){
            target.length = target.length || 0;
            target.length++;
            //Reflect APi tem os mesmos métodos que existem no proxy
            //, permitindo a execução de diversos tipo de operações no objeto alvo
            
            Reflect.set(target, key, value)
            
            //target[key] = value;
        },
        get(target, key){
            if(typeof key === "string" && key.match(/\d+/)){
               if (!(Reflect.has(target,key)) 
                {
                   throw "O vetor não existe"; 
                }
            }

            return Reflect.get(target,key);

        },
        deleteProperty(target, key){
            if(Reflect.has(target,key)){
                delete target[key];
                target.length--;
            }
        }
    });
}
const languages = createArray();
languages[0] = "Ruby"
languages[1] = "JS"
languages[2] = "COBOl"

delete languages[2]
console.log(languages["JavaScript"])
console.log(languages)