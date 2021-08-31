// Carne - 400 gr por pessoa / + de 06 horas - 650 gr
// Cerveja - 1200 ml por pessoa / + de 06 horas - 2000 ml
// Refrigerante e água - 1000ml por pessoa / + de 06 horas - 1500 ml

// Crianças representam 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcCarne (){
    if(inputDuracao.value >= 6){
        return inputAdultos.value * 650 + (inputCriancas.value * 650/2);
    } else {
        return inputAdultos.value * 400 + (inputCriancas.value * 400/2);
    }
}

function calcCerveja (){
    if(inputDuracao.value >= 6){
        return inputAdultos.value * 2000;
    } else {
        return inputAdultos.value * 1200;
    }
}
function calcDemaisBebidas (){
    if(inputDuracao.value >= 6){
        return inputAdultos.value * 1500 + (inputCriancas.value * 1500/2);
    } else {
        return inputAdultos.value * 1000 + (inputCriancas.value * 1000/2);
    }
}

function calcular (){
   let qtdCarne = calcCarne();
   let qtdCerveja = calcCerveja();
   let qtdDemaisBebidas = calcDemaisBebidas();

   resultado.innerHTML = `<p>${qtdCarne} g de carne</p>`;
   resultado.innerHTML += `<p>${qtdCerveja} ml de cerveja</p>`;
   resultado.innerHTML += `<p>${qtdDemaisBebidas} ml das demais bebidas(refrigerante e água)</p>`;
    // Utilização das crases `` ao invés de aspas - Interpolação por placeholder
}