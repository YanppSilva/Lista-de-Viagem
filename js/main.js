// ----------> Os tipos de dados armazenados no localStorage não devem ser considerados sensíveis, de acordo com a LGPD (Lei Geral de Proteção de Dados). Isso ocorre, pois ele não possui nenhuma camada de proteção, e os dados podem ser acessados facilmente por terceiros. Dados considerados sensíveis, devem ser armazenados em Cookies. <----------



// captura dos elementos(formulario)
const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

// transcreve os dados que foram convertidos em string pelo JSON.stringfy em um objeto para o js.
const itens = JSON.parse(localStorage.getItem("itens")) || []

console.log(itens)


itens.forEach((elemento) => {

  // criaNome recebe apenas nome e quantidade
  criaElemento(elemento)
})

// envia o form para a página(acaba não entrando na função)
form.addEventListener("submit", (evento) => {
  // interrompe o envio do form para o navegador
  evento.preventDefault()

  const nome = evento.target.elements['nome']
  const quantidade = evento.target.elements['quantidade']
  
  const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value
  }

  // cria elemento toda vez que o formulario for submetido, a funcao é acionada.
  criaElemento(itemAtual)  

  itens.push(itemAtual)

  // locaStore só salva string, JSON.stringfy converte objetos em strings.
  localStorage.setItem("itens", JSON.stringify(itens))

  // limpa imput
  nome.value = ""
  quantidade.value = ""


})

function criaElemento(item) {

  // cria novo item
  const novoItem = document.createElement('li')
  novoItem.classList.add("item")

  const numeroItem = document.createElement('strong')
  numeroItem.innerHTML = item.quantidade

  //insere um elemento criado dentro do outro (novoItem + numeroItem)
  novoItem.appendChild(numeroItem)

  novoItem.innerHTML += item.nome

  lista.appendChild(novoItem)
}




