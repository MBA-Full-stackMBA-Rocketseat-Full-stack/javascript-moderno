//Desestruturação de objetos Neste vídeo, aprenderemos sobre desestruturação de objetos em JavaScript. A desestruturação de objetos permite acessar propriedades de um objeto separadamente em variáveis, trazendo flexibilidade e agilidade ao código. Além disso, a desestruturação em funções ajuda a evitar problemas com a ordem dos parâmetros. A prática de desestruturar objetos é útil não apenas para manipular objetos, mas também para tornar o código mais limpo e organizado.

const produto = {
    name: "mouse",
    price: 150,
}
const { name, price } = produto
console.log(name)
console.log(price)


// function para receber novo produto 

function novoProduto({ name, price }) {
    console.log(name)
    console.log(price)
}
novoProduto(produto)