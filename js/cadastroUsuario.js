const form = document.getElementById("form")
form.addEventListener("submit", (event)=>cadastroUsuario(event))


function cadastroUsuario(event){

    event.preventDefault();
    const nome = document.getElementById("name")
    const email = document.getElementById("email")
    const senha = document.getElementById("senha")

    const usuarios = JSON.parse(dadosUsuario)

    const usuarioEncontrado = usuarios.filter(usuario=>{
        return usuario.email == email.value
    })
if(!!usuarioEncontrado && usuarioEncontrado.length > 0){
    alert("Email já cadastrado")
    return

}
usuarios.push({
    nome:nome.value,
    email:email.value,
    senha:senha.value
})
dadosUsuario = JSON.stringify(usuarios)

}
     