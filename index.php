<?php


// Carregar o Model e o Controller para podermos usá-los
require __DIR__ . '/app/Models/Site.php';
require __DIR__ . '/app/Controllers/SiteController.php';


$pagina = $_GET['pagina'] ?? 'home';


$controller = new SiteController();

switch ($pagina){
    case 'home':
        $controller->home();
        break;
    case 'contato':
        $controller->contato();
        break;
    
    default:
        $controller->naoEncontrada();
        break;
}