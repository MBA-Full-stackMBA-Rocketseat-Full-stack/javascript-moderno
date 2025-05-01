//Nesta aula, aprenderemos sobre a desestruturação em JavaScript, uma técnica que facilita a extração de dados de arrays e objetos. Vamos aprender como desestruturar um array, pegando valores específicos e ignorando outros. A desestruturação é uma ferramenta poderosa para manipular dados de forma eficiente em JavaScript.


const data = ["Roniere Pereira", "ronierisilvaaa@gmail.com"]

const [username, email] = data

console.log("Nome:", username)
console.log("Email:", email)


const fruit = ["banana", "maça", "laranja", "uva"]

// const [banana, , laranja] = fruit
// console.log( banana)

// // ignorando o primeiro valor
// const [, maça] = fruit
// console.log(maça)
// // ignorando o segundo valor
// const [banana, , uva] = fruit
// console.log(uva)
// // ignorando o terceiro valor
// const [banana, , , uva] = fruit
// console.log(uva)