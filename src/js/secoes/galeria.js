function galeriaSection(){
    const imagens = document.querySelectorAll(".img-galeria")
    //array
    imagens[0].addEventListener("click", ()=>{
        abreModal("Massagem Facial/Craniana", "É o serviço perfeito para quem busca aliviar o estresse acumulado, soltar as tensões do dia a dia e acalmar a mente instantaneamente")
    })
    imagens[1].addEventListener("click", ()=>{
        abreModal("Terapia com Pedras Quentes", "O calor das pedras deslizando pelas costas ajuda a liberar toxinas, alivia dores crônicas e reequilibra a energia do corpo")
    })
    imagens[2].addEventListener("click", ()=>{
        abreModal("Massagem para Casais", "Um momento especial para compartilhar harmonia, relaxamento e focar no relacionamento em um ambiente acolhedor")
    })
    imagens[3].addEventListener("click", ()=>{
        abreModal("Massagem para Casais", "Nossa massagem relaxante nas costas e ombros é o seu momento de resgatar a leveza, melhorando a circulação e eliminando aqueles 'nós' de tensão que carregamos nos ombros")
    })
}
function abreModal(titulo, texto=""){
    const modal = document.getElementById("modal-galeria")
    modal.style.display = "block"
    modal.innerHTML = `
    <div class="modal-content animate" >
        <div class="imgcontainer">
            <span onclick="document.getElementById('modal-galeria').style.display='none'" class="close" title="Close Modal">&times;</span>
        </div>
        <div class="conteudo-interno-modal">
            <h4>
                ${titulo}
            </h4>
            <p>
                ${texto}
            </p>
        </div>

    </div>`

}

export { galeriaSection }