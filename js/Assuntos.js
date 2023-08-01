const dropdownAssuntos = document.getElementById('assuntos');



const assuntos = [
"Financeiro","Farmacêutico","Entrega","Cancelamentos","Outros"
]



assuntos.map((assunto) => {
dropdownAssuntos.innerHTML += `<option>${assunto}</option>`


})

