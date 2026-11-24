<?php



class SiteController
{

    //Exibe a PÁGINA HOME (inicial)
    public function home(){

        // 1- O Controller pede ao Model as informações do site
        $dados = Site::obterDados();

        // 2- Chamando a View
        require __DIR__ . '/../Views/home.php';

    }

    public function contato(){

        $dados = Site::obterDados();
        require __DIR__ . '/../Views/contato.php';

    }

    public function naoEncontrada(){

        // Avisar o navegador que a página solicitada não existe
        http_response_code(404);

        $dados = Site::obterDados();
         require __DIR__ . '/../Views/404.php';

    }






}