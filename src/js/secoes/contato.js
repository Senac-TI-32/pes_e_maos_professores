import {enviarEmail} from "../enviarEmail.js"
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
            mensagemGenerica("Todos os campos são obrigatórios!");
            return true
        }

        const dados = {
            nome: nome.value,
            assunto: assunto.value,
            email: email.value,
            mensagem: mensagem.value
        }

       
       
        mensagemEspera("Aguarde", "Enviando email...", 5000)
       const confirmacao = await enviarEmail(dados)
       if(confirmacao.status){
            mensagemGenerica("Email enviado com sucesso!");
            clearInterval(timerInterval);
            nome.value = ""
            assunto.value = ""
            email.value = ""
            mensagem.value = ""

       }else{
            mensagemGenerica(` Erro:  ${confirmacao.mensagem}`); 
       }

    })
}




iniciarCapturaFormulario()