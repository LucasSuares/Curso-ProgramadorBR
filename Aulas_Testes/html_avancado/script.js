// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AULA SOBRE ATRIBUTO>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let lista = document.getElementById("lista");
// let num = parseInt(lista.getAttribute("num"));

// Ao invés de pegar o atributo "num" com o getAttribute(), eu poderia simplificar mundando o nome do atributo para "data-num"
// Dessa forma, eu pederia pegar o atributo da seguinte forma: lista.dataset.num

// let conteudo = "";
// for (i=1; i<=num; i++){
//     conteudo += "<li>" + i + "</li>"
// }

// lista.innerHTML = conteudo;

// -------------------------- Canvas 01--------------------

let tela = document.getElementById("tela");

let contexto = tela.getContext("2d");

contexto.moveTo(0, 0);
contexto.lineTo(250, 250);
contexto.lineTo(500, 0);
contexto.strokeStyle = "blue"
contexto.lineWidth = 5;
contexto.stroke();

// -------------------------- Canvas 02--------------------

let tela2 = document.getElementById("tela2");

let contexto2 = tela2.getContext("2d");

// contexto2.fillStyle = "green";
// contexto2.fillRect(20, 20, 200, 100);

contexto2.strokeStyle = "#009900"
contexto2.strokeRect(20, 20, 200, 100);

// -------------------------- Canvas 03--------------------

let tela3 = document.getElementById("tela3");

let contexto3 = tela3.getContext("2d");

contexto3.beginPath();

contexto3.lineWidth = "3";
contexto3.strokeStyle = "#FF0000";
contexto3.moveTo(20, 20);
contexto3.lineTo(300, 400);
contexto3.stroke();

contexto3.beginPath();

contexto3.lineWidth = "6";
contexto3.strokeStyle = "rgb(20,40,255)";
// contexto3.fillStyle = "green";
contexto3.moveTo(50, 20);
contexto3.lineTo(200, 400);
contexto3.lineTo(100, 400);
// contexto3.closePath();
// contexto3.fill()
contexto3.stroke();

// -------------------------- Canvas 04--------------------

// let tela4 = document.getElementById("tela4");

// let contexto4 = tela4.getContext("2d");

// let x = 250;
// let y = 250;
// let raio = 125;

// let inicio = 0;
// let fim = 2 * Math.PI;

// contexto4.beginPath();

// contexto4.strokeStyle = "white";
// contexto4.lineWidth = "4";
// contexto4.arc(x,y, raio, inicio, fim);
// contexto4.stroke();

// -------------------------- Canvas 04 com animação--------------------

let tela4 = document.getElementById("tela4");

let contexto4 = tela4.getContext("2d");

let circulo = {
    x:250,
    y:250,
    raio: 60,
    inicio:0,
    fim: 0
}

function desenharCirculo(c){
    contexto4.beginPath()
    contexto4.rect(0, 0, 500, 500);
    contexto4.fillStyle = "orangered"
    contexto4.fill();

    contexto4.beginPath()
    contexto4.strokeStyle = "white";
    contexto4.lineWidth = "4";
    contexto4.arc(c.x,c.y, c.raio, c.inicio, c.fim);
    contexto4.stroke();
}

setInterval( function(){
    if(circulo.fim < 2*Math.PI){
        circulo.fim += 0.1;
        circulo.x += 3;
    }
    desenharCirculo(circulo);
}, 50);

// a última aula do módulo foi sobre como inserir uma imagem no canvas  "drawImage"