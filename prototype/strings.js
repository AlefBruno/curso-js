let string = "10";
console.log(Number(string));
console.log(typeof Number(string));

let num = 9;
console.log(String(num));
console.log(typeof String(num));

// Contando os caracteres 
let word = "Paralelepipedo"
console.log(word.length)

let number = 1322223

console.log(String(number).length)


// 2 casas decimais e trocando . por ,
let salary = 13000.25899
console.log(salary.toFixed(2).replace(".", ","))

// Deixando as Palavras em Minúscula e Maiúsculas.
word = "Programar"
console.log(word.toLowerCase())
console.log(word.toUpperCase())

word = "Eu quero aprender a programar!"

let myArray = word.split(" ")
console.log(myArray)

let newArray = myArray.join("_")
console.log(newArray)

console.log(word.includes("aprender"))