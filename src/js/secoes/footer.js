import {enviarEmail } from "../enviarEmail.js"
function footerSection(){
    const anoEl = document.getElementById("footer-ano")
    anoEl.textContent = new Date().getFullYear()

    const formNewsletter = document.getElementById("form-newsletter")
    const mensagem = document.getElementById("msg-newsletter")
    const mensagemPadrao = mensagem.textContent

    formNewsletter.addEventListener("submit", async(event) => {
        event.preventDefault()
        const email = document.getElementById("email-newsletter")
        const dados = {
            email: email.value,
            nome: "Newsletter",
            assunto: "Newsletter",
            mensagem: "Newsletter"
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
        formNewsletter.reset()

        setTimeout(() => {
            mensagem.textContent = mensagemPadrao
        }, 4000)
    })
}

export { footerSection }
