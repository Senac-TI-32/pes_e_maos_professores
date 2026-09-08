let timerInterval;
function mensagemEspera(titulo, mensagem, tempo){
    
            Swal.fire({
            title: titulo,
            html: mensagem,
            timer: tempo,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
           
            });

}

function mensagemGenerica(mensagem){
    Swal.fire(mensagem);
    if(timerInterval){
        clearInterval(timerInterval);
    }
}