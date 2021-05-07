// adiciona itens na lista
let listaTarefas = document.getElementById('lista-tarefas');
let botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.addEventListener('click', function () {
    let entrada = document.getElementById('texto-tarefa');
    let elementoItemLista = document.createElement('li');
    elementoItemLista.innerHTML = entrada.value;
    elementoItemLista.style.backgroundColor = 'rgb(99, 98, 98)';
    elementoItemLista.className = 'tarefa';
    listaTarefas.appendChild(elementoItemLista);
    entrada.value = '';
});
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
        tarefas[i].style.backgroundColor = 'rgb(99, 98, 98)';
    }
    if (e.target.className === 'tarefa') {
        e.target.style.backgroundColor = 'rgb(128,128,128)';
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

