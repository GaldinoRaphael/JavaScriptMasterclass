const charsets = new Set(["ASCII", "ISO-8859-1", "UTF-8"]);
console.log(Array.from(charsets))
charsets.add("UTF-6")
charsets.forEach((charset) => console.log(charset))
console.log(charsets.size)
console.log(charsets.has("ASCII"))

console.log(charsets.delete("UTF-6"))
charsets.clear()
console.log(charsets)

//você pode usar o set para eliminar duplicações

let array = [10, 10, 20, 20]

const set = new Set(array);

console.log(set)

//weakset 