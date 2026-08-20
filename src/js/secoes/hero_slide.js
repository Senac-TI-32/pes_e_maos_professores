async function mostraSlide(){
    let numero_slide = 0
    const btantes =  document.getElementById("btn-antes")
    const btndepois = document.getElementById("btn-depois")
    mostrarOcultar(numero_slide)
    btantes.addEventListener("click", ()=>{
        numero_slide = numero_slide - 1
        if(numero_slide < 0){
            numero_slide = 3
        }
        console.log(numero_slide)
        mostrarOcultar(numero_slide)
    } )

    btndepois.addEventListener("click", ()=>{
         numero_slide = numero_slide + 1
         if(numero_slide > 3){
            numero_slide = 0
        }
        console.log(numero_slide)
        mostrarOcultar(numero_slide)
    })
    
    //                         tag = elemento html
    //                          # = id no html
    //                          . = classe no html
   
    
    //slides[numero].style.display = "block"
    
    
    /*
        i=0    i <4 = true
        i=1    i <4  = true
        i=2    i <4  = true
        i=3    i <4  = true
        i=4    i <4  = false
    */
    
    
    
}
function mostrarOcultar(numero_slide){
    let slides = document.querySelectorAll(".slide-imagem-hero")
    console.log(slides)
    for(let i=0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }
    slides[numero_slide].style.display = 'block'
}
export { mostraSlide }