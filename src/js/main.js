import { mostraSlide } from './secoes/hero_slide.js'
import { carregarNavbar } from './secoes/navbar.js'
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
carregarNavbar()
//                                 ou 
if(window.location.pathname === '' || window.location.pathname === '/' || window.location.pathname === '/index.html'){
    montarPagina()
}
const botaotopo = document.querySelector(".btn-topo")
botaotopo.addEventListener("click", ()=>{
    window.scrollTo(0, 0)
})
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 50){
        botaotopo.style.display = 'block'
    }
    if(window.scrollY < 50){
        botaotopo.style.display = 'none'
    }

})




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