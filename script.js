//// Adicionar itens na lista
// Marcar itens concluídos individualmente
//Excluir itens individualmente
// Validar campo de texto para não entrar itens vazios//- Limpar campo de texto depois que insere o item na lista
///BÔNUS
//
// Marcar todos os itens como feito
// Excluir todos os itens da lista
// Reorganizar a ordem "arrastando" os cards utilizando drag and drop
const form = document.querySelector('form')

form.addEventListener("submit", function adicionarTarefa(event) {
  event.preventDefault();
const listaTarefa = document.querySelector ('#todoLista')
const input = document.querySelector('#todoInput').value.trim()
const botao = document.querySelector(".todo__tudo-feito")
const paragrafo = document.getElementById('todoLista').querySelectorAll('p')
  

 botao.addEventListener('click', function () {
 const paragrafos = document.getElementById('todoLista').querySelectorAll('p')
  
    for (const paragrafo of paragrafos) {
      paragrafo.classList.add('checked')
    
 }  
})

const btnRemoveAll = document.querySelector('.todo__remover-todos');

  function removeAll() {

    const apagarTudoPai = document.querySelector('.todo__tarefas')
    const apagarTudo = document.querySelector('.todo__tarefas-lista');
      apagarTudo.remove()

   }
   btnRemoveAll.addEventListener('click', removeAll)

 {

 }

 if(!input){
  alert('por favor preencher a tarefa')
}
else{

 const tarefa = document.createElement('li') //
 const paragrafo = document.createElement('p')
 const span = document.createElement('span')

paragrafo.innerText = input 
span.innerText = '#'  

span.classList.add('btn-excluir')

 listaTarefa.appendChild(tarefa)
tarefa.appendChild(paragrafo)
 tarefa.appendChild(span)
form.reset()

span.addEventListener('click' ,function(){
  listaTarefa.removeChild(tarefa)
})

paragrafo.addEventListener('click' ,function(){
paragrafo.classList.add('checked');


})
}
})
