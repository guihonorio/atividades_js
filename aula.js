//Variáveis

let nome = "João";
nome = "Guilherme"
console.log(nome)

let sobrenome = "Silva";
sobrenome = "Honório"
console.log(sobrenome)

const idade_maior = 18
console.log(idade_maior)


//Operadores Aritméticos
let num1 = 10
let num2 = 5
let resultado

resultado = num1 + num2
console.log("Resultado da soma:" + resultado)

resultado = num1 - num2
console.log("Resultado da subtração:" + resultado)

resultado = num1 * num2
console.log("Resultado da multiplicação:" + resultado)

resultado = num1 / num2
console.log("Resultado da divisão:" + resultado)

resultado = num1 % num2 
console.log("Resultado do módulo:" + resultado)

resultado = num1 ** num2
console.log("Resultado da potência:" + resultado)

//Operadores Relacionais 
let nota = 9
let media = 7

resultado = nota >=media
console.log("Aprovado:" + resultado)

resultado = nota === media
console.log("Nota é igual a média (===):" + resultado)

resultado = nota == media
console.log("Nota é igual a média (==):" + resultado)

//Operadores Lógicos
// ! -> operador lógico de negação
// &&  -> operador lógico de conjunção (AND)
// || -> operador lógico de disjunção (OR)


//Operadores Ternários
//condicao ? valorSeVerdadeiro : valorSeFalso

let idade = 20
let resultado_idade = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(resultado_idade)

let idade_pessoa = 20
let resultado_dirigir = (idade_pessoa >= 18) ? "Pode Dirigir" : "Não pode dirigir"
console.log(resultado_dirigir)

