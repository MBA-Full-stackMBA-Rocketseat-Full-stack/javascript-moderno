

const numeros = [5, 12, 8, 130, 44];

const resultad = numeros.find(function(numero) {
  return numero > 10;
});

console.log(resultado);  // 12

//Com Arrow Function:

const resultado = numeros.find(numero => numero > 10);
console.log(resultado);  // 12
