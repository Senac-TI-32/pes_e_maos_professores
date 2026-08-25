function galeriaSection(){
    const imagens = document.querySelectorAll(".img-galeria")
    //array
    imagens[0].addEventListener("click", ()=>{
        abreModal("aqui é a imagem 1", "")
    })
    imagens[1].addEventListener("click", ()=>{
        abreModal("aqui é a imagem 2", "")
    })
    imagens[2].addEventListener("click", ()=>{
        abreModal("aqui é imagem 3", "")
    })
    imagens[3].addEventListener("click", ()=>{
        abreModal("aqui é a imagem 4", "")
    })
}
function abreModal(titulo, texto=""){
    const modal = document.getElementById("modal-galeria")
    modal.style.display = "block"
    modal.innerHTML = `<div class="modal-content animate" >
    <div class="imgcontainer">
      <span onclick="document.getElementById('modal-galeria').style.display='none'" class="close" title="Close Modal">&times;</span>
    </div>
    <div>
        <h4>
            ${titulo}
        </h4>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur, ipsam velit inventore officia tenetur vitae est laboriosam id ea eveniet, dolorem magnam quos ratione ut repudiandae mollitia fugit quo!
        </p>
    </div>

</div>`

}

export { galeriaSection }