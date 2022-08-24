// captura dos elementos(formulario)
const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = []

// envia o form para a página(acaba não entrando na função)
form.addEventListener("submit", (evento) => {
    // interrompe o envio do form para o navegador
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    // cria elemento toda vez que o formulario for submetido, a funcao é acionada.
    criaElemento(nome.value, quantidade.value)

    // limpa imput
    nome.value = ""
    quantidade.value = ""


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

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)

    // locaStore só salva string, JSON.stringfy converte objetos em strings.
    localStorage.setItem("item", JSON.stringify(itens))
}



