// console.log("Hello world");
// // alert("olá mundo");
// var a = "Hello world";
// console.log(a);

// function soma (a, b){
//     return a + b;
// }

// console.log(soma(5, 10));

// var c = "linha 1 \n linha 2";
// console.log(c);
// (\n") para uma string ir para a próxima linha

// var a = null;
// utilizando o null é informar que a variável está/ficou vazia, diferente do undefined

// var a = "10";

// var b = "5";

// var c = parseInt(a) + parseInt(b);

// console.log(c);

// parseInt transforma uma string em um número inteiro
// parseFloat transforma uma string em um número real

// o prompt pega um dado do usuário
// para fazer uma conta por exemplo preciso colocar o parseInt pq o prompt sempre retorna uma string

// exemplo:

// var numero = parseInt(prompt("Digite um número:"));
// var dobro = numero * 2;
// alert("O dobro de " + numero + " é " + dobro);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE OPERADOR TERNARIO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Aula sobre operador ternário (? : ) - passa uma condição em apenas uma linha
// Ex.:
// var idade = 19;
// idade >= 18 ? console.log("Pode comprar cerveja") : console.log("Não pode comprar :(")
// ex2.:
// var enchaACara = idade >=18 ? true : false;
// Poderia atribuir uma string "pode" ou "não pode" por exemplo, no lugar de true e false
// console.log(enchaACara);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE SWITCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var nota1 = 8;
// var nota2 = 5;

// var media = (nota1 + nota2) / 2;

// var conceito = "";

// if (media >= 8){
//     conceito = "Muito bom";
// }
// else if (media >= 6.5){
//     conceito = "Bom";
// }
// else if (media >= 5){
//     conceito = "Regular";
// }
// else{
//     conceito = "Irregular";
// }

// console.log(media);

// conceito = "Mais ou menos";  Exemplo para situação de default
// Importante observar a utilização do break, pq se não for utilizado, passará por todas as demais "case"

// console.log(conceito);

// switch(conceito){

//     case "Muito bom":
//         console.log("Parabéns, você é um ótimo aluno");
//         break

//     case "Bom":
//         console.log("Você está quase perfeito");
//         break

//     case "Regular":
//         console.log("Estude mais um pouco");
//         break

//     case "Irregular":
//         console.log("Estude bastante e procure melhorar");
//         break

//     default:
//         console.log("Houve algum erro");
//         break

// }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE FOR/WHILE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var num = 10;

// for(i=0; i<num; i++){
//     console.log(i);
// }

// console.log("acabou");
// console.log("Em seguida vou imprimir o contador de 1 a 10");

// for(i=1; i<=10; i++){
//     console.log(i);
// }

// while significa "enquanto"  ex.:

// while(num <15){
//     console.log("numero " + num);
//     num++;
    // importante fazer o incremento ("num++" no caso) para não entrar num loop infinito


// a função match.random() gera um número real entre 0 e 1
// a função match.trunc() pega a parte inteira de um número real
// ex.:

// var numberSorteio = Math.random() * 100;

// while(numberSorteio < 90){
//     console.log(Math.trunc(numberSorteio));
//     numberSorteio = Math.random() * 100;
// }

// console.log(Math.trunc(numberSorteio));

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE ARRAY >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// posso criar um array da seguinte forma tbm:

// var alunos = new Array();

// alunos.push("Zeca")

// console.log(alunos)

// ........

// var alunos = Array("josé", "joão", "maria", "zeca");

// o exemplo acima é outro método de criar Array, o qual eu desconhecia
// var alunos = ["josé", "joão", "maria", "zeca"]; *a forma que eu já conhecia*

// console.log(alunos);
// console.log(alunos.length);

// array.length diz qual o tamanho da array

// for(i=0; i<alunos.length; i++){
//     console.log(alunos[i]);
// }

// outras maneiras de fazer isso com o "in" e o "of":
// o "in" vai pegar o index da Array
// o "of" vai pegar o elemento

// ex.:

// for(i in alunos){
//     console.log(i);
// }

// for (var i of alunos){
//     console.log(i);
// }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE FUNÇÃO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function notaFinal (n1, n2){
//     var nota1 = n1;
//     var nota2 = n2;
//     var media = (nota1 + nota2) / 2;
//     return media;
// }

// var resultado1 = notaFinal(5, 9);
// var resultado2 = notaFinal (7,6);

// console.log(resultado1);
// console.log(resultado2);

// No javascript posso atribuir uma função a uma variável ex.: "var mesmaFuncao = notaFinal"
// ***função normal, função anônima e arrow funciton***

// arrow function ex.:

// var funcao = (a, b) => {
//     return ...
// }

// função anônima ex.:

// var funcao = function (a, b){
//     return...
// }

// função normal ex.:

// function funcao (a, b){
//     return...
// }

// function tabuada (num){
//     var resultado = [];
//     for(i=1; i<=10; i++){
//         resultado = num*i;
//         console.log(num + " x " + i + " = " + resultado);
//     }
//     return resultado;
// }

// tabuada(7);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE OBJETO - PROP. >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ao invés de usar o index para chamar um elemento, como na Array, no objeto é utilizado uma "chave"


// Ex.:

// var aluno = {nome: "José", idade: 16, notas: [7.5, 8.0, 6.0]};

// aluno.nome;

// nome, notas e idade são propriedades do objeto

// as propriedades do objeto funcionam como se fosse uma variável

// posso, inclusive, ter uma array como propriedade e até mesmo outro objeto

// Posso imprimir um elemento de um objeto das seguintes formas:

// console.log(aluno.nome);

// console.log(aluno["nome"]);

// console.log(aluno);

// console.log(aluno.notas[0]);

// ou

// console.log(aluno["notas"][2]);

// Posso adcionar uma nova propriedade ao objeto das seguintes formas:

// aluno.matricula = 1111111111;

// ou

// Obs.: a vantagem do próximo método é que tbm posso criar uma variável do tipo string e ao invés de "sobrenome",
// passar a variável dentro dos colchetes

// aluno["sobrenome"] = "souza";

// console.log(aluno);

// Assim como na Array, posso criar um objeto da seguinte forma:

// var alunos = new Object();

// alunos.nome = "José"

// alunos["notas"] = [8, 7, 6]

// console.log(alunos);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE OBJETO - MÉTODOS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// métodos são funções dentro do obejeto

// ex.:

// var aluno = {nome: "José", notas: [7, 8],
//              media: function(n1, n2){
//                  return (n1 + n2) / 2;
//              }}

// Obs.: posso declarar a função fora do objeto tbm, e chama-la dentro do obejto (método)

// console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

// *** Utilizando o "this"... Ex.:

// var aluno = {nome: "José", notas: [7, 8],
//              media: function(){
//                  return (this.notas[0] + this.notas[1]) / 2;
//              }}

// o "this" (tradução: esse/isso) deve ser usado dentro do objeto, como uma forma de informar que aquela propriedade
// pertence a aquele objeto.

// console.log(aluno.media())

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE OBJETO - CONSTRUTORES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Importante: posso criar um objeto dentro de uma função, dentro de uma array ... 

// Praticamente tudo dentro do javascript é um objeto, dessa forma posso ter um método para um Array
// como por exemplo: array.forEach(function(elemento){
    // console.log(elemento);
// }
// ... e até mesmo uma função 

// ****Assitir novamente essa aula

function criarAluno(nome, n1, n2){
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) /2;
        }
    }
}

// a função acima não é um objeto de Fato, mas retorna um objeto
// posso utilizar o "this." para tranformar uma função em um objeto de fato

var turma = [
    criarAluno("José", 10, 7),
    criarAluno("João", 8, 6),
    criarAluno("Maria", 7, 6)
]

var aluno = turma[1]

console.log(aluno)

console.log(aluno.media())

// utilizando o forEach (método para array)

turma.forEach(function(elemento){
    console.log(elemento);
})

// ou posso criar esse laço das formas aprendidas inicialmente Ex.:

for(var elemento of turma){
    console.log(elemento);
}


// ** instanciar um objeto

function obj (n, s){
    this.nome = n;
    this.sobrenome = s;
}

var a = new obj ("José", "Suares");

console.log(a);


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE OBJETO - DATAS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var d = new Date(1994, 09, 14);

// o número 09 retorna o mês de outubro pq os meses passam numa array 0 a 11

console.log(d);

// posso usar métodos tbm ex.: getDate(), getFullYear()... e setDate(), setDay()... [set.. modifica a data]

console.log(d.getDay())

// os dias da semana tbm passam numa array 0 a 6

d.setHours(14);

console.log(d);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE VAR, LET E CONST >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ** Posso até adicionar um novo valor a uma const (constante), como por exemplo no caso em que ela recebe
// um array ou um objeto, porém ela não pode ser retribuida. Ou seja, ainda será o mesmo array ou o mesmo objeto

// O let e o  const tem escopo local, ou seja, se eles estiverem dentro de um bloco, só irão existir dentro daquele bloco.

// var - Variável global

// let e const - variáveis locais