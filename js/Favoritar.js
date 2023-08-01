// [M1S07] Ex4 - [pagina-todos-medicamentos] Adicionar evento para favoritar medicamento
//  Capture o evento de clique no botão de favoritar um produto e, ao ser clicado, exiba um log com o nome do medicamento adicionado e a lista de medicamentos favoritados no JavaScript. Além disso, mostre um alerta informando que o medicamento foi adicionado aos favoritos.



const botaoFavoritar = document.querySelectorAll('.botaoFavoritar')

const btn = document.getElementById('btn')

let favoritos = []


botaoFavoritar.forEach((botao) => {
    
    botao.addEventListener('click', () => {
        

        alert('Medicamento adicionado aos favoritos')


         favoritos.push(botao.parentElement.children[0].innerHTML)
         
        console.log(botao.parentElement.children[0].innerText+' Adicionado a lista de favoritos'+ ' Lista de favoritos : '+favoritos)


    

    })
    
    
})







