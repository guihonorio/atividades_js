//Exercicio 5: Crie um programa que verifique se uma pessoa pode votar.

//Regras:
//16 anos ou mais → "Pode votar"
//Menor de 16 anos → "Não pode votar"
//Obrigatório uso do ternário.

let idade_1 = 15
let resultado_idade = (idade_1 >= 16) ? "Pode Votar" : "Não pode votar"
console.log(resultado_idade)

//Exercicio 6: Qual o nível escolar do aluno. 

//Declarada a idade de um aluno e validando que aluno está matriculado. 
//Retorne a situação escolar completa usando if encadeado com mais de uma condição lógica.

//Regras:
//- Se NÃO estiver matriculado:
//Qualquer idade → "Aluno não matriculado"
//- Se estiver matriculado:
//Menor que 6 anos → "Educação Infantil"
//De 6 até 10 anos → "Ensino Fundamental I"
//De 11 até 14 anos → "Ensino Fundamental II"
//De 15 até 17 anos → "Ensino Médio"
//18 anos ou mais → "Ensino Superior ou EJA"

let idade = 18
let matriculado = true

if (matriculado == false){
    console.log("Aluno não matriculado")
} else if (matriculado == true && idade >6){
    console.log("Educação Infantil")
} else if (matriculado == true && idade >= 6 && idade <= 10){
    console.log("Educação Fundamental I")
} else if (matriculado == true && idade >= 11 && idade <= 14){
    console.log("Ensino Fundamental II")
} else if (matriculado == true && idade >= 15 && idade <= 17){
    console.log("Ensino Médio")
} else (matriculado == true && idade >= 18);
    console.log("Ensino Superior ou EJA")






