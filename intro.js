//eslint - é uma biblioteca que trabalha com regras (estudo extra)


//Tipos de dados 
"String"
'String'
"Texto 'outro'"

10 //Number
12.5 //Number
NaN //Number

//método que verifica qual o tipo de dado primitivo
typeof("30.5") //output: String

//tipo boolean
true
false

//undefined: é um dado válido porém sem valor definido
//null: nulo


//variáveis JS
const nome = "Zenith"
console.log(nome)

//const nome = "Nayara"
//Erro: não é possível declarar constante mais de 1x

//Declaração - é quando determinamos o tipo de variável
//Atribuição - é o que vem após o sinal de "=" (recebe)

const idade = 31

let profissao //Declaração da variável sem atribuir valor 

//Reatribuindo valor:
profissao = "Desenvolvedor"

// var //depreciado - não se usa mais pois permite redeclaração e reatribuição, podendo gerar erro no código.



//função

//() -> parâmetro da função caso necessário
//{} -> dentro das chaves tem o que a função irá executar

function nomeFuncao () {
  //bloco de construção
}

//Formas de escrita de texto composto
// camelCase - declaração de variaveis, funções..
// snake_case - usado mais no banco de dados 
// PascalCase - usado na declaração de componente de React

//Objeto 
let pessoa = {
  nome: "Nayara",
  idade: 31,
  profissao: "Desenvolvedora"
}

//Array - lista

let frutas = ["Banana", "Maçã", "Uva"]

//Array de objeto
let produtos = [
  {
    id: 1,
    nome: "blusa",
    genero: "masculino",
    marca: "nike",
    valor: 199.99,
  },
  {
    id: 2,
    nome: "blusa",
    genero: "masculino",
    marca: "adidas",
    valor: 199.99,
  },
  {
    id: 3,
    nome: "blusa",
    genero: "masculino",
    marca: "fila",
    valor: 199.99,
  }
]


//template string - possibilidade de trazer um texto com js

const mostrarProduto1 = `o valor do produto ${produtos[0].nome} é ${produtos[0].valor}`
console.log(mostrarProduto1)

//concatenação

const mostrarProduto2 = "o valor do produto " + produtos[0].nome + " "+ "é" + " " + produtos[0].valor
console.log(mostrarProduto2)

let subtracao = "100" - 5
console.log(subtracao)

let soma = 100 + "5"
console.log(soma)