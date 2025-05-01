//Método some()

const numeros = [1, 3, 5, 8];

const temPar = numeros.some(function(numero) {
  return numero % 2 === 0;
});

console.log(temPar); // true

// Exemplo retornando false

const numero = [1, 3, 5, 7];

const temPr = numero.some(numero => numero % 2 === 0);

console.log(temPr); // false