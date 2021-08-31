// function maiorNumero (a, b){
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(maiorNumero (7,4));

// 'ou'

// function maiorNumero (a, b){
//     return a > b ? a : b;
// }

// console.log(maiorNumero (7,4));

// ** fizzBuzz

// const resultado = fizzBuzz(15);
// console.log(resultado);

// function fizzBuzz(entrada){
//     if (typeof entrada != 'number')
//         return 'Não é um número';
//     if (entrada % 3 === 0 && entrada % 5 === 0)
//         return 'FizzBuzz';
//     if (entrada % 3 === 0)
//         return 'Fizz';
//     if (entrada % 5 === 0)
//         return 'Buzz';
//     return entrada;
// }

// ** Verificar velocidade

// function verificarVelocidade (vel){
//     let pontos = 0;
//     let VelMax = 70;
//     if (vel <= VelMax){
//         console.log('Ok');
//     } 
//     for (let i = 1; i <= (vel - VelMax)/5; i++){
//         pontos = i;
//     }
//     if (vel > 70 && vel < 130){
//             console.log(Math.floor(pontos), 'pontos');
//     } else {
//             console.log('carteira suspensa', pontos, 'pontos');
//         }
// }

// verificarVelocidade(100);

// ** Função que recebe uma quantidade de valores e exibe se é par ou ímpar

// function exibirTipo(limite){
//     let quant = 0;
//     for (let i = 0; i <= limite; i++){
//         quant += i;
//         if (i % 2 === 0){
//             console.log(i, 'par');
//         } else {
//             console.log(i, 'ímpar');
//         }
//     }
// }

// exibirTipo(10);

// ** função que exibe a propriedade de um objeto (tipo string)

// const filme = {
//     título : 'XXX',
//     ano : 2000,
//     diretor : 'beltrano',
//     personagem : 'fulano'
// }

// function exibirPropriedade(obj){
//     for (prop in obj){
//         if(typeof obj[prop] === 'string'){
//             console.log(prop, obj[prop]);
//         }
//     }
// }

// exibirPropriedade(filme);

// ** função que recebe um valor e retorna a soma dos múltiplos de 3 e 5

// function somar(numeros){
//     let resulFinal = 0;
//     for (i = 1; i <= numeros; i++){
//         if (i % 3 === 0 || i % 5 === 0){
//             resulFinal += i;
//         }
//     } console.log(resulFinal);
// }

// somar(10);

// ** função que passa por uma array e retorna a média dos valores

function mediaDosAlunos(arr){
    let soma = 0;
    let media = 0;
    for (i = 0; i < arr.lenght; i++){
        soma += arr[i];
        media = soma / i
    } console.log(media);
}

let array = [6, 7, 8];

console.log(mediaDosAlunos(array));

