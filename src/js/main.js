import { mostraSlide } from './secoes/hero_slide.js'
/*
PascalCase = primeira letra de cada palavra em maiúscula
---- camelCase = primeira letra da primeira palavra em minúscula e a primeira letra das demais palavras em maiúscula
snake_case = todas as letras em minúscula e separadas por underline
kebab-case = todas as letras em minúscula e separadas por traço
*/
// arrays
const secoes = ["hero", "sobre", "servicos", "galeria", "precos", "relatos"]

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





// parenteses ()
// colchetes  [] array
// chaves     {}
//                   0      1       2    3
// const carrinho = []
// console.log(carrinho)

// //acessar metodos de um array ponto apos o nome do array
// carrinho.push("carlos")
// carrinho.push("mauricio")

// console.log(carrinho)

// carrinho.unshift("ricardo")

// console.log(carrinho)

// // pop oposto do push
// carrinho.pop()

// console.log(carrinho)

// carrinho.shift()

// // shift oposto do unshift
// console.log(carrinho)

// console.log( carrinho.length )