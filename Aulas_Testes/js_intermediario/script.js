// Aula sobre o window - trata-se de um dos objetos mais importantes do javascript
// utilizado através das propriedades "console", "alert"... métodos etc

// ex.: window.console("Olá");

// é o mesmo que:

// console.log("Olá");

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE DOCUMENT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Document é uma das principais propriedades do window

// a propriedade document do objeto window é uma das formas de acessar o arquivo html

// cada tag do html pode ser transformada em um objeto no javascript

// acesssando o body com o document Ex.:

// document.body.innerHTML = "<h2>Esse título foi inserido utilizando o JS</h2>"

// posso acessar o head e o body diretamento com o document

// ##### Porém, para acessar outros elementos do arquivo html devo utilizar a seguinte forma:

// document.getElementById - para acessar um elemento pela Id

// document.getElementsByClassName - para acessar um elemento pela Classe

// document.getElementsByTagName - Para acessar um documento pelo nome da tag

// ##### Posso modificar elemento HTML das seguintes formas:


let p = document.getElementById("p1");

p.innerHTML = '<h2>Agora o parágrafo é um h2, conforme alteração com JS </h2>'

// o innerHTML insere um elemento html conforme o exemplo acima, diferente do innerText e textContent

// o innerText irá mostrar somente o que está visivél no navegador por exemplo

// Já o textContent irá mostrar tudo quanto é texto que estiver no HTML, inclusive elementos com "display: none"

p.className = ""

// com a alteração acima, eu modifiquei a classe do p1, que era "paragrafo", passou a ser nada "", o que fez retirar
// o estilo que tinha sido atribuido

// posso acessar um atributo tbm com o getAttribute("")

// posso alterar o atributo que já existe com o setAttribute("nomeDoAtt", "valorDoAtt"), bem como inserir um novo atributo

p.style.color = "#ffffff99"

// posso alterar o estilo tbm, como no exemplo acima

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE DOM - EVENTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// aula sobre eventos:

// posso utilizar como "atributo" nas tags html

// exemplos: onclick=""; onchange=""; onload="";

// posso escrever o código javascript diretamente no evento ou chamar uma funcão, por exemplo

// EX: onload é um evento em que alguma coisa irá acontecer somente após a página estiver completamente carregada

// outros exemplos:

// onmouseout=""  onmouseover=""

// addEventListener("mouseOver" "click"..., elemento) é outra forma de adicionar evento

function h3Click() {
    console.log("teste");
    console.log(this);
}

function teste02 (e){
    console.log ("teste 2");
    console.log(this);
    console.log(e);
    console.log(e.target);

}

let h3 = document.getElementsByTagName("h3")[0];

h3.addEventListener("click", teste02);


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE ELEMENTO PAI E FILHO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Posso pegar o elemento filho com a função ".children", que irá retornar uma array dos elementos filhos

// e posso pegar o elemento pai com a função ".parentElement" para pegar a taq pai



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE BIBLIOTECA MATH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let pi = Math.PI.toFixed(2);

console.log(pi);



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE JSON >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// JSON é uma representação de um objeto - Javascript Object Notation

// com a função ".stringify()", tranformo um objeto em uma string

// com a função ".parse()", tranformo uma string em um objeto

let a = {
    nome: "José",
    nota: 9.5
}

let b = JSON.stringify(a);

console.log(a);
console.log(b);

let a2 = '{"nome": "Lucas", "nota": 8}'
//  OBS: parao JSON.parse() funcionar com a variável a2 é necessário seguir a regra acima, com as aspas
// simples por fora e aspas duplas por dentro

let b2 = JSON.parse(a2);

console.log(a2);
console.log(b2);


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE LOCAL STORAGE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// localStorage.setItem("nome", "lucas"); - insere um valor na memória do navegador -
// Passo uma chave do tipo string (nome) e um valor do tipo string (lucas)

// localStorage.getItem("nome"); - Busca o valor guardado na memória - Nesse caso passo somente a chave (nome)

// localStorage.removeItem("nome"); - remove o valor // // // // //

// EXEMPLO DE PERSISTÊNCIA DE DADOS 🔰

// a função abaixo recebe como parametro "e" (elemento) em referência ao "this" que foi declarado como parametro
// na função do evento "oninput" na tag "input", com intuito de obter o "valor digitado",  bem como
// salvando o que foi digitado na memória do navegador
function atualizar(e){
    let h2 = document.getElementById("nome");
    h2.innerHTML = e.value;

    localStorage.setItem("nome", e.value);
}

// na função abaixo toda vez que eu atualizo a página(a pag for carragada) permanece no h2 o que foi digitado anteriormente
onload = function(){
    let nome = localStorage.getItem("nome");
    let h2 = document.getElementById("nome");
    h2.innerHTML = nome;
}

// Há também o 'localStorage.clear()' - o método clear irá apagar tudo que estiver na memória do navegador

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE TIMER/INTERVALO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// setTimeout(Função(Geralmente), 30000(e o tempo de delay em milisegundos)) é uma função do window que recebe dois argumentos.

// EXEMPLO**função - argumento 1;  🔼 30000 - argumento 2  🔼

// a função para "fazer algo", e o tempo em que será executado...

// setInterval() é uma função que diferente da anterior, ela irá executar  o primeiro parametro no intervalo de tempo do
// segundo parametro, continuamente...

// clearInterval() - para parar o intervalo  🔰

var numContagem = 0;
var timer;

function atualizarTexto(){
    let h4 = document.getElementById("title4");
    h4.innerHTML += " " + numContagem;
    numContagem++;
}

function iniciar(){

   timer = setInterval(atualizarTexto, 1000);
}

function parar(){

    clearInterval(timer);
}

// Foi necessário declarar a variável "timer" para utilizar como parâmetro da função clearInterval()

function zerar(){
    
}