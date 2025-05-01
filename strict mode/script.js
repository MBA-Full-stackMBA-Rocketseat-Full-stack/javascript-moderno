// Conhecendo o strict mode Nesta aula, vamos aprender sobre o modo estrito do JavaScript, conhecido como strict mode, que ao ser ativado, torna os erros que eram silenciosos em exceções. Vamos ver como o modo estrito pode ajudar a identificar erros, como a questão de variáveis não definidas e parâmetros duplicados em funções. O uso do strict mode é recomendado para evitar problemas comuns de flexibilidade do JavaScript, garantindo um código mais robusto e correto.

"use strict"

function showMessage(){
    let personName = "Roniere Pereira"
    console.log("Ola", personName)
}

showMessage()


class Student{
    get point(){
        return 7
    }
}

let student = new Student()
// tentando mudar uma propriedade somente leitura 

//student.point = 10

console.log(student.point)

// tentando deletar uma propriedade 

// delete window.document


// quando passamos parametros duplicados 
function sum(a, a, c){
    console.log(a + a + c)
}

const result = sum(1, 2, 3)
console.log("RESULTADO",result)

