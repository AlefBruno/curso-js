let myArray = new Array(5)
let mArray = new Array("a", "b")

console.log(myArray);
console.log(mArray);
console.log(mArray[1]);

let techs = ["html", "css", "js"]

// add um item no fim 
techs.push("Java")

// add um item no inicio
techs.unshift("SQl")

// remover do fim 
techs.pop()

// remover item no começo
techs.shift()

// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))

// remover 1 ou mais itens em qualquer posição do array

// techs.splice(1, -1)
// techs.splice(1, 1)

// encontrar a posição de um elemento no array
let index = techs.indexOf("css")
console.log(index)
techs.splice(index, 1)

console.log(techs)