let listaTarefas = document.getElementById('lista-tarefas');
let botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.addEventListener('click', function () {
    let entrada = document.getElementById('texto-tarefa');
    let elementoItemLista = document.createElement('li');
    elementoItemLista.innerHTML = entrada.value;
    listaTarefas.appendChild(elementoItemLista);
    entrada.value = '';
});
