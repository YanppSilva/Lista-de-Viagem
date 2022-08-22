// captura dos elementos(formulario)
const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

// envia o form para a página(acaba não entrando na função)
form.addEventListener("submit", (evento) => {
    // interrompe o envio do form para o navegador
    evento.preventDefault()

    // cria elemento toda vez que o formulario for submetido, a funcao é acionada.
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {
   
    // cria novo item 
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    //insere um elemento criado dentro do outro (novoItem + numeroItem)
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome
    lista.appendChild(novoItem)
}



