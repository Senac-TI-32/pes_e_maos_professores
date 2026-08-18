/*
PascalCase = primeira letra de cada palavra em maiúscula
---- camelCase = primeira letra da primeira palavra em minúscula e a primeira letra das demais palavras em maiúscula
snake_case = todas as letras em minúscula e separadas por underline
kebab-case = todas as letras em minúscula e separadas por traço
*/
// arrays
const secoes = ["hero", "sobre", "servicos", "galeria", "precos", "relatos"]
let numero_slide = 0

async function carregarSecoes(nome) {
    const secaoHTML = await fetch(`src/partials/${nome}.html`)
    document.getElementById(nome).innerHTML = await secaoHTML.text()
}

async function montarPagina() {
    for(const nome of secoes){
        try{
            await carregarSecoes(nome)
        }catch(e){
            console.error(e.message)
        }
    }
   await mostraSlide(numero_slide)
}
montarPagina()



async function mostraSlide(numero){
    //                         tag = elemento html
    //                          # = id no html
    //                          . = classe no html
    let slides = document.querySelectorAll(".slide-imagem-hero")
    slides[numero].style.display = "block"
}
