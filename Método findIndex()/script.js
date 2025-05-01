//Método findIndex()

// exemplo partico 
const numeros = [10, 25, 30, 50];

const indic = numeros.findIndex((num) => num > 20);

console.log(indic); // 1 (porque 25 é o primeiro número > 20)

// Exemplo com objetos

const alunos = [
  { nome: "Ana", nota: 7 },
  { nome: "João", nota: 4 },
  { nome: "Maria", nota: 9 }
];

const indice = alunos.findIndex((aluno) => aluno.nota < 5);

console.log(indice); // 1 (João tem nota menor que 5)


//Se quiser o próprio elemento, use .find()
//Se quiser o índice, use .findIndex()