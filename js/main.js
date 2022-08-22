// captura dos elementos(formulario)
const form = document.getElementById("novoItem")

// envia o form para a página(acaba não entrando na função)
form.addEventListener("submit", (evento) => {
    // interrompe o envio do form para o navegador
    evento.preventDefault()

    console.log(evento)
    // extrair o evento a partir do imput
    console.log(evento.target.elements['nome'].value)    
    console.log(evento.target.elements['quantidade'].value)
})



