// adiciona itens na lista
let listaTarefas = document.getElementById('lista-tarefas');
let botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.addEventListener('click', function () {
    let entrada = document.getElementById('texto-tarefa');
    let elementoItemLista = document.createElement('li');
    elementoItemLista.innerHTML = entrada.value;
    elementoItemLista.style.backgroundColor = 'rgb(255, 255, 255)';
    elementoItemLista.className = 'tarefa';
    listaTarefas.appendChild(elementoItemLista);
    entrada.value = '';
});

// let arrayInfoTarefas = [];
// let objInfoTarefas
// window.onload = function () {
//     if (localStorage.length !== 0) {
//         let listaSalva = localStorage.getItem('infoLista');
//         for (let i = 0; i < listaSalva.length; i += 0) {
//             let elementoItemLista = document.createElement('li');

//         }
//         let elementoItemLista = document.createElement('li');
//         elementoItemLista.innerHTML = ;
//         elementoItemLista.style.backgroundColor = 'rgb(99, 98, 98)';
//         elementoItemLista.className = 'tarefa';
//         listaTarefas.appendChild(elementoItemLista);
//     }
// }


// seleciona item
// listaTarefas.addEventListener('click', function (e) {
//     let arrayTarefas = document.querySelectorAll('.tarefa');
//     let corComparacao = 'rgb(128,128,128)';
//         if (document.querySelectorAll('.tarefa')[0].style.backgroundColor === corComparacao) {
//             document.querySelectorAll('.tarefa').style.backgroundColor = 'rgb(99, 98, 98)';
//             console.log('entrou no if');
//         }
//     e.target.style.backgroundColor = 'rgb(128,128,128)';
// });

// seleciona item
//document.querySelector('#lista-tarefas').className = 'selecionada';
// listaTarefas.addEventListener('click', function (e) {
//     let tarefaSelecionada = document.querySelector('.selecionada');
//     tarefaSelecionada.style.backgroundColor = 'rgb(99, 98, 98)';
//     tarefaSelecionada.className = 'tarefa'
//     e.target.style.backgroundColor = 'rgb(128,128,128)';
//     e.target.className = 'tarefa selecionada';
// });

//seleciona item
// listaTarefas.addEventListener('click', function (e) {
//     let elementoComparacao = document.getElementsByClassName('tarefa');
//     for (let i = 0; i < elementoComparacao.length; i += 1) {
//         let elem = elementoComparacao[i];
//         if(getStyle(elem, 'background-color') == 'rgb(128,128,128)') {
//             getStyle(elem, 'background-color') = 'rgb(99, 98, 98)';
//             getStyle(e.target, 'background-color') = 'rgb(128,128,128)';
//         }
//     }
// });

// seleciona item
// listaTarefas.addEventListener('click', function (e) {
//     let elementoComparacao = document.getElementsByClassName('tarefa');
//     let corComparacao = 'rgb(128,128,128)';
//     for (let i = 0; i < elementoComparacao.length; i += 1) {
//         let componentesEstilo = window.getComputedStyle(elementoComparacao[i]);
//         let bgComponente = componentesEstilo.getPropertyValue('background-color');
//         console.log(bgComponente);
//         if (bgComponente === corComparacao) {
//             bgComponente = 'rgb(99, 98, 98)';
//             console.log('entrou no if');
//         }
//     }
//     e.target.style.backgroundColor = 'rgb(128,128,128)';
// });

// seleciona item
listaTarefas.addEventListener('click', function (e) {
    let tarefas = document.getElementsByClassName('tarefa');
    for (let i = 0; i < tarefas.length; i += 1) {
        tarefas[i].style.backgroundColor = 'rgb(255, 255, 255)';
    }
    if (e.target.className === 'tarefa' || e.target.className === 'tarefa completed') {
        e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
});
// tarefa completada
listaTarefas.addEventListener('dblclick', function (e) {
    if (e.target.className === 'tarefa completed') {
        e.target.className = 'tarefa';
    } else {
        e.target.className = 'tarefa completed';
    }
});

// tarefa completada
// let tarefas = document.getElementsByClassName('tarefa');
// for (let i = 0; i < tarefas.length; i += 1) {
//     let tarefa = tarefas [i];
//     tarefa.addEventListener('dblclick', function (e) {
//         if (e.target.className === 'tarefa completed') {
//             e.target.className = 'tarefa';
//         } else {
//             e.target.className = 'tarefa completed';
//         }
//     });
// }

// apagar lista
let botaoApagarLista = document.getElementById('apaga-tudo');
botaoApagarLista.addEventListener('click',function () {
    let tarefas = document.querySelectorAll('.tarefa');
    for (let i = 0; i < tarefas.length; i += 1) {
        listaTarefas.removeChild(tarefas[i]);
    }
});
// apagar tarefas completadas
let botaoApagarCompletadas = document.getElementById('remover-finalizados');
botaoApagarCompletadas.addEventListener('click',function () {
    let tarefasCompletadas = document.querySelectorAll('.completed');
    for (let i = 0; i < tarefasCompletadas.length; i += 1) {
        listaTarefas.removeChild(tarefasCompletadas[i]);
    }
});
// salvar tarefas
// let botaoSalvar = document.getElementById('salvar-tarefas');
// botaoSalvar.addEventListener('click',function () {
//     let tarefas = document.querySelectorAll('.tarefa');
//     for (let i = 0; i < tarefas.length; i += 1) {
//         localStorage.setItem(i, tarefas[i]);
//     }
// });

// window.onload = function () {
//     if (localStorage.length !== 0) {
//         for (let i = 0; i < localStorage.length; i += 1) {
//             let tarefaSalva = document.createElement(localStorage.getItem(i))
//             listaTarefas.appendChild(tarefaSalva);
//         }
//     }
// }

// salvar informacoes das tarefas
let botaoSalvar = document.getElementById('salvar-tarefas');
botaoSalvar.addEventListener('click',function () {
    let tarefas = document.querySelectorAll('.tarefa');
    let arrayInfoTarefas = [];
    for (let i = 0; i < tarefas.length; i += 1) {
        let objInfoTarefas = {
            valor: '',
            classe: ''
        };
        objInfoTarefas.valor = tarefas[i].innerText;
        objInfoTarefas.classe = tarefas[i].className;
        arrayInfoTarefas[i] = objInfoTarefas;
    }
    localStorage.setItem('infoLista', JSON.stringify(arrayInfoTarefas));
});

// salvar tarefas
// let botaoSalvar = document.getElementById('salvar-tarefas');
// botaoSalvar.addEventListener('click',function () {
//     let tarefas = document.querySelectorAll('.tarefa');
//     for (let i = 0; i < tarefas.length; i += 1) {
//         let objInfoTarefas = {
//             valor: '',
//             classe: ''
//         };
//         objInfoTarefas.valor = tarefas[i].innerText;
//         objInfoTarefas.classe = tarefas[i].className;
//         localStorage.setItem(i, JSON.stringify(objInfoTarefas));
//     }
// });

// pegar informacoes salvas
window.onload = function () {
    if (localStorage.length !== 0) {
        let stringInfoSalva = localStorage.getItem('infoLista');
        let arrayInfoSalva = JSON.parse(stringInfoSalva);
        for (let i = 0; i < arrayInfoSalva.length; i += 1) {
            let elementoItemLista = document.createElement('li');
            elementoItemLista.innerHTML = arrayInfoSalva[i].valor;
            elementoItemLista.style.backgroundColor = 'rgb(255, 255, 255)';
            elementoItemLista.className = arrayInfoSalva[i].classe;
            listaTarefas.appendChild(elementoItemLista);
        }
    }
}

// ---------------------------------------- IDEIAS --------------------------------

//fazendo com que cada item da lista seja um objeto com informações de text,
//background e class e salvando cada objeto dentro de um array,
//esse array pode ser acessado por posição e assim seus dados pordem ser invertidos

// mover tarefa para cima
let botaoMoverCima = document.getElementById('mover-cima');
botaoMoverCima.addEventListener('click', function () {
    let tarefas = document.querySelectorAll('.tarefa');
    for (let i = 0; i < tarefas.length; i += 1) {
        let corBg = tarefas[i].style.backgroundColor;
        console.log(corBg);
        if (corBg === 'rgb(128, 128, 128)') {
            if (i !== 0) {
                let tarefaSelecionada = tarefas[i];
                let anteriorTarefaSelecionada = tarefaSelecionada.previousElementSibling;
                let objInfo = {};
                console.log(objInfo);
                objInfo = {
                    valorSelecionada: tarefaSelecionada.innerText,
                    classeSelecionada: tarefaSelecionada.className,
                    valorAnterior: anteriorTarefaSelecionada.innerText,
                    classeAnterior: anteriorTarefaSelecionada.className
                }
                console.log(objInfo);
                tarefaSelecionada.innerText = objInfo.valorAnterior;
                tarefaSelecionada.className = objInfo.classeAnterior;
                tarefaSelecionada.style.backgroundColor = 'rgb(255, 255, 255)';
                anteriorTarefaSelecionada.innerText = objInfo.valorSelecionada;
                anteriorTarefaSelecionada.className = objInfo.classeSelecionada;
                anteriorTarefaSelecionada.style.backgroundColor = 'rgb(128,128,128)';
                console.log(tarefaSelecionada);
                console.log(anteriorTarefaSelecionada);
            } else {
                alert('Esta tarefa já ocupa a primeira posição da lista');
            }
        }  
    }
    console.log(document.querySelectorAll('.tarefa'));
});

// mover tarefa para baixo
let botaoMoverBaixo = document.getElementById('mover-baixo');
botaoMoverBaixo.addEventListener('click', function () {
    let tarefas = document.querySelectorAll('.tarefa');
    for (let i = tarefas.length - 1; i >= 0; i -= 1) {
        let corBg = tarefas[i].style.backgroundColor;
        console.log(corBg);
        if (corBg === 'rgb(128, 128, 128)') {
            if (i !== tarefas.length - 1) {
                let tarefaSelecionada = tarefas[i];
                let posteriorTarefaSelecionada = tarefaSelecionada.nextElementSibling;
                let objInfoMoverBaixo = {};
                console.log(objInfoMoverBaixo);
                objInfoMoverBaixo = {
                    valorSelecionada: tarefaSelecionada.innerText,
                    classeSelecionada: tarefaSelecionada.className,
                    valorPosterior: posteriorTarefaSelecionada.innerText,
                    classePosterior: posteriorTarefaSelecionada.className
                }
                console.log(objInfoMoverBaixo);
                tarefaSelecionada.innerText = objInfoMoverBaixo.valorPosterior;
                tarefaSelecionada.className = objInfoMoverBaixo.classePosterior;
                tarefaSelecionada.style.backgroundColor = 'rgb(255, 255, 255)';
                posteriorTarefaSelecionada.innerText = objInfoMoverBaixo.valorSelecionada;
                posteriorTarefaSelecionada.className = objInfoMoverBaixo.classeSelecionada;
                posteriorTarefaSelecionada.style.backgroundColor = 'rgb(128,128,128)';
                console.log(tarefaSelecionada);
                console.log(posteriorTarefaSelecionada);
            } else {
                alert('Esta tarefa já ocupa a última posição da lista');
            }
        }
    }
    console.log(document.querySelectorAll('.tarefa'));
});

// apagar tarefa selecionada
let botaoApagarSelecionada = document.getElementById('remover-selecionado');
botaoApagarSelecionada.addEventListener('click', function () {
    let tarefas = document.querySelectorAll('.tarefa');
    for (let i = 0; i < tarefas.length; i += 1) {
        let corBg = tarefas[i].style.backgroundColor;
        if (corBg === 'rgb(128, 128, 128)') {
            listaTarefas.removeChild(tarefas[i]);
        }
    }
});