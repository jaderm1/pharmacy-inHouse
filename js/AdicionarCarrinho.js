// Ex3 - [pagina-todos-medicamentos] Adicionar evento para adicionar medicamento

// Capture o evento de clique no botão de adicionar um medicamento e, ao ser clicado, exiba um log com o nome do medicamento adicionado e a lista de medicamentos no JavaScript. Além disso, mostre um alerta informando que o medicamento foi adicionado ao carrinho.


const botaoAdicionar = document.querySelectorAll('.botaoAdicionar')

var carrinho = []

botaoAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        alert('Medicamento adicionado ao carrinho')

    carrinho.push(botao.parentElement.children[0].innerText)

    
    console.log(botao.parentElement.children[0].innerText+' Adicionado ao carrinho'+ ' Lista de medicamentos : '+carrinho)

       
    })
})


// console.log(carrinho)
