const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", (event) => validarLogin(event))

function validarLogin(e) {
    
    e.preventDefault()
    const email = document.getElementById("email")
    const senha = document.getElementById("senha")

    console.log(email.value);
    console.log(senha.value);

    const usuarios = JSON.parse(dadosUsuario)
    console.log(usuarios);

    
    const [usuarioEncontrado] = usuarios.filter(usuario => usuario.email == email.value)

    debugger

    if (!usuarioEncontrado) {
        alert("Usuário não encontrado")
        return
    }
        
    if(usuarioEncontrado.senha!=senha.value){
        alert("Senha incorreta")
        return
    }
        localStorage.setItem("dados_usuario",JSON.stringify({nome:usuarioEncontrado.nome,email:usuarioEncontrado.email}))

        
        location.href = "index.html"
        


    }
    