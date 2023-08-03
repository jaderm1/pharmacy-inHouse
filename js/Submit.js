// [M1S07] Ex6 - [pagina-contato] Adicionar Evento de envio de Formulário de Contato

// Capture o evento de envio do formulário de contato e, ao ser enviado, exiba um log com o nome da pessoa que enviou a mensagem utilizando JavaScript. Além disso, mostre um alerta informando que a mensagem foi enviada com sucesso.



const form = document.querySelector('#form');



form.addEventListener('submit', () => {
    let nome = document.getElementById('name');

    console.log(`Mensagem enviada por ${nome.value}`);

    alert('Mensagem enviada com sucesso!');
});

