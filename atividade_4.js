//Exercício 1 - Cardápio 🍽️

//Um restaurante tem o seguinte cardápio:
//1 → Pizza
//2 → Hambúrguaer
//3 → Salada
//4 → Refrigerante

//Peça para o usuário escolher uma opção (número).
//Use switch para mostrar a comida escolhida.

//Requisitos
//Declare o código do produto e quantidade; 
//Utilize switch para mostrar o nome do produto escolhido.
//Exiba uma mensagem de acordo com a escolha:
//"Pedido saudável" se escolher Salada.
//"Pedido tradicional" se escolher Pizza ou Hambúrguer.
//Utilize um operador ternário para exibir:
//"Bebida escolhida" se selecionar Refrigerante.
//"Alimento escolhido" para os demais produtos.

let codigo_produto = 1
let quantidade = 3

switch(codigo_produto){
     case 1:
        console.log("Pedido tradicional")
        break
     case 2:
        console.log("Pedido tradicional")
        break
     case 3:
        console.log("Pedido saudável")
        break
     case 4:
        console.log("Refrigerante")
        break
    default:
        console.log("Produto inválido!")
}

 let pedido = (codigo_produto ==4) ? "Bebiba Escolhida" : "Alimento Escolhido"
 console.log(pedido)

 
//Exercício 2- Categorize os números:
//Crie um programa em JavaScript que percorra todos os números de 0 a 100 utilizando um laço de repetição.
//Para cada número, o sistema deve identificar e exibir:
//Se o número é par
//Se o número é ímpar
//E garantir que ele está dentro do intervalo de 0 a 100
//Use estruturas condicionais (if) e operadores relacionais para realizar as verificações.

for (let numero = 0; numero <= 100; numero++) {

    if (numero % 2 === 0) {
        console.log(numero + " é par e está dentro do intervalo.")
    } else {
        console.log(numero + " é ímpar e está dentro do intervalo.")
    }

}

//Exercício 3 – Classificação de Alunos
//Crie um programa em JavaScript que contenha dois arrays:
//   alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"]
//   notas = [9, 5, 7, 10, 4]
//Use um for para percorrer os arrays e exibir o nome do aluno junto com sua nota.

//Classifique cada aluno usando if:

//* Nota ≥ 8 → Destaque
//* Nota entre 6 e 7 → Está bom 
//* Nota < 6 → Precisa melhorar

//Use também um operador ternário para definir o status do aluno.
//Usando o mesmo sistema do exercício anterior, crie contadores para:

//* Quantos alunos são Destaque
//* Quantos estão Está bom
//* Quantos Precisa melhorar

//No final, exiba um resumo geral da turma com esses totais.


alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"]
notas = [9, 5, 7, 10, 4]
let destaque = 0
let estaBom = 0
let precisaMelhorar = 0

for (let cont = 0; cont <=(alunos.length-1); cont ++){

    if (notas[cont] >= 8) {
        destaque++;
    } else if (notas[cont] >= 6 && notas[cont] <= 7) {
        estaBom++;
    } else {
        precisaMelhorar++;
    }
        let status_aluno = notas[cont] >= 8
        ? "Destaque"
        : notas[cont] >= 6
            ? "Está bom"
            : "Precisa melhorar"

    console.log(alunos[cont] + " - Nota: " + notas[cont]);
    console.log("→ " + status_aluno);

}

console.log("---> RESUMO DA TURMA");
console.log("* Destaque: " + destaque)
console.log("* Está bom: " + estaBom)
console.log("* Precisa melhorar: " + precisaMelhorar)