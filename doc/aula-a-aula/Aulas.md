# Aula 01: Introdução ao MVC e organização do projeto Pés e Mãos


O que é MVC?
MVC é uma forma de organizar o código dividindo-o em três partes:


Model (modelo):Guarda e entrega os dados	A despensa: sabe o que existe
View (visão): Mostra o HTML ao visitante	O prato servido na mesa
Controller (controlador): Recebe o pedido, busca no Model e escolhe a View	O garçom


Como o projeto ficou organizado:

index.php                         <- ponto de entrada (recebe todos os pedidos)
app/
  Controllers/SiteController.php  <- coordena as páginas
  Models/Site.php                 <- dados do estabelecimento
  Views/
    home.php                      <- página inicial
    contato.php                   <- página de contato
    404.php                       <- página não encontrada
src/
  css/ img/ js/                   <- iguais (js/main.js ajustado)
  partials/                       <- pedaços de HTML reaproveitados com include
    navbar.php                    <- menu (antes era navbar.js)
slick/  backend/                  <- sem mudanças
aula-a-aula/                      <- esta documentação


# Aula 02: Alimentando as páginas com base no conteúdo do FrontEnd