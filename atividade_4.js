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
