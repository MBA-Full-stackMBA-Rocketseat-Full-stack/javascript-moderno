//Método every()

const numeros = [2, 4, 6, 8];

const todosSaoPares = numeros.every(function(numero) {
  return numero % 2 === 0;
});

console.log(todosSaoPares); // true


//Exemplo com falso

const numero = [2, 3, 6, 8];

const todosaoPares = numero.every(numero => numero % 2 === 0);

console.log(todosaoPares); // false


