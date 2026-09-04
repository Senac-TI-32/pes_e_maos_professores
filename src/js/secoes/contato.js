function iniciarCapturaFormulario(){
    const formulario = document.getElementById("form-contato")
    formulario.addEventListener("submit", async (event)=>{
      event.preventDefault()
        const resultado = document.getElementById("resultado")
        const nome = document.getElementById("nome")
        const assunto = document.getElementById("assunto")
        const email = document.getElementById("email")
        const mensagem = document.getElementById("mensagem")

        if(nome.value === "" || assunto.value === "" || email.value === "" || mensagem.value === ""){
            alert("um dos campos está vazio")
            return true
        }

        const dados = {
            nome: nome.value,
            assunto: assunto.value,
            email: email.value,
            mensagem: mensagem.value
        }

       const confirmacao = await enviarEmail(dados)
       if(confirmacao.status){
            resultado.innerHTML = "Email enviado com sucesso"
            nome.value = ""
            assunto.value = ""
            email.value = ""
            mensagem.value = ""

       }else{
            resultado.innerHTML = ` Erro:  ${confirmacao.mensagem}`
       }

    })
}

async function enviarEmail(dados){
    const resultado = await fetch("./backend/public/index.php",{
        method: "POST",
        body: JSON.stringify(dados)
    })
    const resposta = await resultado.json()
    return resposta
}


iniciarCapturaFormulario()