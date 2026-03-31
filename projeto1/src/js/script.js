// Declaraçoes e variaveis

//var,let e const

//var xpto =10;
//console.log(xpto);
//var xpto=20;
//console.log(xpto);

//var  - pode redeclarar e acessar fora do escopo

//let nao pode redeclarar e nao consegue acessar fora escopo



//if(true){
//var nome="Fiap"

//}

//console.log(nome);

//const
//const taxaJuros = 0.85;
//console.log(taxaJuros);

// newFunction();
// function newFunction() {
//     var exemplo1 = "Ola dev";
//     console.log(exemplo1);

//     let exemplo2 = "Ola dev let";
//     const exemplo3 = "ola dev const";
//     console.log(exemplo3)
//     let exemplo4 = 20;
//     console.log(typeof exemplo4);

//     let exemplo = true;
//     console.log(typeof exemplo);

//     let exemplo6 = {};
//     console.log(typeof exemplo6);

//     let exemplo7 = ["Java", "Python", "C#"];
//     console.log(typeof exemplo7);

//     //variavel indefinida
//     let exemplo8;
//     console.log(typeof exemplo8);

//     //variavel vazia
//     let exemplo9 = null;
//     console.log(exemplo9);
// }

// const valor1="20";
// const valor2=10;

// console.log(valor1 + valor2);
// console.log(valor1 / valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);

// //operadores logicos

// console.log(valor1 > valor2)
// console.log(valor1 > 10 && valor2 != 20)
// console.log(valor2 >  5 || valor1 > 50)

// //operadores de comparação
// console.log(valor1 < valor2);
// console.log(valor1 >= valor2);
// console.log(valor1 <= valor2);
// console.log(valor1 != valor2);
// console.log(valor1 == valor2);
// console.log(valor1 === valor2);
// console.log("o valor é:", valor2);

// const p =20;
// const v =10;
// const precoFinal = p - v;
// console.log("O preço final com desconto é:", precoFinal)

// const login = 1;
// const token = 1234;
// const transacaoAutorizada = login === 1 && token >=10;
// console.log("Transação Autorizada com sucesso", transacaoAutorizada);


// // ESTRUTURA CONDICIONAL

// if(false){
//     console.log("é Verdadeiro")
// }

//if/else

// let nome="Fiap";

// if(nome=="Fiap"){
//     console.log("nome verdadeiro")}else{
//         console.log("nome errado")
//     }

//if encadeado ou alinhado

let idade = 25;

if(idade <= 13){
    console.log("é uma criança")
}else if(idade> 13 && idade <=18){
    console.log("é um adolescente")
}else if(idade >= 60){
    console.log("É um idoso")
}else{
    console.log("é um adulto")
}

//switch case

let times="corinthians";
switch(times){
    case "santos":
        console.log("Um time idoso")
        break;
    case "sao paulo":
        console.log("time bambi")
        break;
    case "palmeiras":
        console.log("melhor de SP")
        break;
    case "corinthians":
        console.log("time de bandido")
        break;
    default:
        console.log("é tao ruim quanto a seleção brasileira")
}

// ternaria
let salario = 100;
let resultado = salario ==100 ? "Salario Certo" : "SalarioErrado"
console.log(resultado)

let usuario= "fiap";
let userLogado = usuario === "fiap"?"logado com sucesso" : "usuario inválido"
console.log(userLogado);

function verificarParImpar(numero){
    return numero % 2 === 0 ? "PAR" : "IMPAR";
    

}

console.log(verificarParImpar(8439889))