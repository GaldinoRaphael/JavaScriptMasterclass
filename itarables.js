// const languages = ["cobol", "lisp", "fortran"]
// //for of
// for(let language of languages){
//     console.log(language)
// }

// const iterator = languages[Symbol.iterator]();
// console.log(iterator.next())

function createIterator(...array){
    return {
        [Symbol.iterator](){
            let i = 0;
            return {
                next(){
                    if( i < array.length){
                        return {
                            value: array[i++],
                            done: false
                        }
                    } else{
                        return{
                            value: undefined,
                            done: true
                        }
                    }        
                }
            }
        }
    }
    
}

const iterator = createIterator("Fortran", "Lisp", "COBOL")
console.log(iterator.next());
console.log(iterator.next());