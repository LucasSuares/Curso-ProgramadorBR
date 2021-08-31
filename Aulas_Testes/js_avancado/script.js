// Aula sobre "use strict", que faz com que as palavras reservadas (var, let, const..) tenham que ser
// usadas obrigatoriamente ...


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<AULA SOBRE THIS E BIND >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let dog = {
//     sound: "Au au",
//     speak: function(){
//         console.log(this.sound)
//     }
// }

// let cat = {
//     sound: "miau",
//     speak: function(){
//         console.log(this.sound)
//     }
// }

function speakGeneric(){
    console.log(this.sound);
}


let dog = {
    sound: "Au au",
    speak: speakGeneric
}

let cat = {
    sound: "miau",
    speak: speakGeneric
}

// dog.speak();
// cat.speak();

speakGeneric();

// bind é um método de função que passa um contexto para uma função

let contextoDaFuncao = speakGeneric.bind(dog);

contextoDaFuncao()


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<AULA SOBRE ARROW FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ... Aula apenas para exemplificar o quanto a arrow function deixa o código mais simples,
// porém o "this" e o "bind" não funcionam com a arrow function



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<AULA SOBRE CALLBACK >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// "callback" é a possibilidade de passar uma função como arqumento de outra função

// let usuarios = ["lucas", "joão", "marcela", "paula"];

// function inserirUsuario (nome, callback){
//     setTimeout(()=>{usuarios.push(nome); callback()}, 100);
// }

// function listarUsuarios (){
//     console.log(usuarios);
// }


// inserirUsuario("miguel", listarUsuarios);


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<AULA SOBRE PROMISES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let usuarios = ["lucas", "joão", "marcela", "paula"];

function inserirUsuario (nome){

    let promise = new Promise(function(resolve, reject){
        
        setTimeout(()=>{
            usuarios.push(nome);
            let error = false;

            if (!error){
                resolve();
            } else{
                reject({msg: "algo deu errado"})
            }
        }, 1000);
    })
    return promise;
}

function listarUsuarios (){
    console.log(usuarios);
}


// inserirUsuario("miguel").then(listarUsuarios).catch(erro => {console.log(erro.msg)});


// **** pesquisar sobre promises


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<AULA SOBRE ASYNC AWAIT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// async / await é outra forma de utilizar a promise 

async function executar(){
    await inserirUsuario("miguel");
    listarUsuarios();
}

executar()

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<AULA SOBRE FILTER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



function novoAluno (nome, idade){
    return {nome, idade};
}

let alunos = [
    novoAluno("José", 26),
    novoAluno("João", 31),
    novoAluno("Maria", 20),
    novoAluno("Paula", 32)
]

console.log(alunos);


let alunoMaisDe30 = alunos.filter(maisDe30 = (aluno) => {return aluno.idade>30})

// declarei a função maisDe30 como uma arrow fuction, dentro do filter. Porém poderia ter declarado antes,
// como uma função normal ou de fecha mesmo e depois chamar dentro do filter.

console.log(alunoMaisDe30);
console.log(alunoMaisDe30[0].nome);