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

//Operadores Condicionais
//Operadores Ternários
//condicao ? valorSeVerdadeiro : valorSeFalso

let idade = 20
let resultado_idade = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(resultado_idade)

let idade_pessoa = 20
let resultado_dirigir = (idade_pessoa >= 18) ? "Pode Dirigir" : "Não pode dirigir"
console.log(resultado_dirigir)


//Operadores Condicionais

//  IF (condição) {
//    codigo a ser executado

// }

if (idade >= 0 || idade < 16) {
    console.log("Não pode votar")
} else if (idade >=16 || idade <18) {
    console.log ("Votar opcional")
} else if (idade >=18 || idade <65) {
    console.log("Votar obrigatório")
} else if (idade >=65) {
    console.log ("Votar opcional")
} else {
    console.log ("Idade inválida")
}

//-----------------------------------------//

//Operadores Condicionais

//Condicionais múltiplas

//Switch (Condição)
//  Case 1:
//    Bloco de código
//  Case 2:
//    Bloco de código
//  Case 3:
//    Bloco de código
//  Default:
//    Bloco de código

let dia = 3
switch (dia){
    case 1:
        console.log("Segunda-Feira")
        break
    case 2:
        console.log("Terça-Feira")
        break
    case 3:
        console.log("Quarta-Feira")
        break
    case 4:
        console.log("Quinta-Feira")
        break
    default:
        console.log("Dia inválido!")
}

//Não precisa obrigatoriamente usar os pontos e vírgulas no JavaScript.