let listaTarefas = document.getElementById('lista-tarefas');
let botaoCriarTarefa = document.getElementById('criar-tarefa');
let botaoApagarLista = document.getElementById('apaga-tudo');
let botaoApagarCompletadas = document.getElementById('remover-finalizados');
let botaoSalvar = document.getElementById('salvar-tarefas');
let botaoApagarSelecionada = document.getElementById('remover-selecionado');
let botaoMoverCima = document.getElementById('mover-cima');
let botaoMoverBaixo = document.getElementById('mover-baixo');

// adicionar tarefa na lista
botaoCriarTarefa.addEventListener('click', function () {
  let entrada = document.getElementById('texto-tarefa');
  if (entrada.value !== '') {
    let elementoItemLista = document.createElement('li');
    elementoItemLista.innerHTML = entrada.value;
    elementoItemLista.style.backgroundColor = 'rgb(255, 255, 255)';
    elementoItemLista.className = 'tarefa';
    listaTarefas.appendChild(elementoItemLista);
    entrada.value = '';
  } else {
    alert('Insira uma tarefa válida antes de adiciná-la à lista');
  }
});

// seleciona item
listaTarefas.addEventListener('click', function (e) {
  let tarefas = document.getElementsByClassName('tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
  if (
    e.target.className === 'tarefa' ||
    e.target.className === 'tarefa completed'
  ) {
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

// apagar lista
botaoApagarLista.addEventListener('click', function () {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    listaTarefas.removeChild(tarefas[i]);
  }
});

// apagar tarefas completadas
botaoApagarCompletadas.addEventListener('click', function () {
  let tarefasCompletadas = document.querySelectorAll('.completed');
  for (let i = 0; i < tarefasCompletadas.length; i += 1) {
    listaTarefas.removeChild(tarefasCompletadas[i]);
  }
});

// salvar informacoes das tarefas
botaoSalvar.addEventListener('click', function () {
  let tarefas = document.querySelectorAll('.tarefa');
  let arrayInfoTarefas = [];
  for (let i = 0; i < tarefas.length; i += 1) {
    let objInfoTarefas = {
      valor: '',
      classe: '',
    };
    objInfoTarefas.valor = tarefas[i].innerText;
    objInfoTarefas.classe = tarefas[i].className;
    arrayInfoTarefas[i] = objInfoTarefas;
  }
  localStorage.setItem('infoLista', JSON.stringify(arrayInfoTarefas));
});

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
};

// apagar tarefa selecionada
botaoApagarSelecionada.addEventListener('click', function () {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    let corBg = tarefas[i].style.backgroundColor;
    if (corBg === 'rgb(128, 128, 128)') {
      listaTarefas.removeChild(tarefas[i]);
    }
  }
});

// mover tarefa para cima
botaoMoverCima.addEventListener('click', function () {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    let corBg = tarefas[i].style.backgroundColor;
    if (corBg === 'rgb(128, 128, 128)') {
      if (i !== 0) {
        let tarefaSelecionada = tarefas[i];
        let tarefaSubstituta = tarefaSelecionada.previousElementSibling;
        moverTarefa(tarefaSelecionada, tarefaSubstituta);
      } else {
        alert('Esta tarefa já ocupa a primeira posição da lista');
      }
    }
  }
});

// mover tarefa para baixo
botaoMoverBaixo.addEventListener('click', function () {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let i = tarefas.length - 1; i >= 0; i -= 1) {
    let corBg = tarefas[i].style.backgroundColor;
    console.log(corBg);
    if (corBg === 'rgb(128, 128, 128)') {
      if (i !== tarefas.length - 1) {
        let tarefaSelecionada = tarefas[i];
        let tarefaSubstituta = tarefaSelecionada.nextElementSibling;
        moverTarefa(tarefaSelecionada, tarefaSubstituta);
      } else {
        alert('Esta tarefa já ocupa a última posição da lista');
      }
    }
  }
});

// funcao que move tarefa
function moverTarefa(tarefaSelecionada, tarefaSubstituta) {
  let objInfo = {};
  objInfo = {
    valorSelecionada: tarefaSelecionada.innerText,
    classeSelecionada: tarefaSelecionada.className,
    valorSubstituta: tarefaSubstituta.innerText,
    classeSubstituta: tarefaSubstituta.className,
  };
  tarefaSelecionada.innerText = objInfo.valorSubstituta;
  tarefaSelecionada.className = objInfo.classeSubstituta;
  tarefaSelecionada.style.backgroundColor = 'rgb(255, 255, 255)';
  tarefaSubstituta.innerText = objInfo.valorSelecionada;
  tarefaSubstituta.className = objInfo.classeSelecionada;
  tarefaSubstituta.style.backgroundColor = 'rgb(128, 128, 128)';
}
