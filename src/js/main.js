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
   lucide.createIcons();
   await mostraSlide()
}
montarPagina()



async function mostraSlide(botao=""){
    //                         tag = elemento html
    //                          # = id no html
    //                          . = classe no html
   
    let slides = document.querySelectorAll(".slide-imagem-hero")
    //slides[numero].style.display = "block"
    if(botao==="antes"){
        numero_slide = numero_slide - 1
    }else if(botao === "depois"){
        numero_slide = numero_slide + 1
    }
    
    if(numero_slide < 0 && botao==="antes"){
        numero_slide = 3
    }else if(numero_slide > 3 && botao==="depois"){
        numero_slide = 0
    }
    console.log(botao)
    console.log(numero_slide)
    console.log(slides.length)
    /*
        i=0    i <4 = true
        i=1    i <4  = true
        i=2    i <4  = true
        i=3    i <4  = true
        i=4    i <4  = false
    */
    for(let i=0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }
    slides[numero_slide].style.display = 'block'
    
}
