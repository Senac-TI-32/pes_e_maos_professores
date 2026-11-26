<?php

// VIEW: Home - Página Inicial


?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($dados['titulo'] ?? 'Ki detalhe - pés e mãos') ?> - Home</title>
    <meta name="description" content="<?= htmlspecialchars($dados['descricao']) ?>">
    <meta name="keywords" content="estestica, pedicure">
    <meta property="og:title" content="<?= htmlspecialchars($dados['titulo'] ?? 'Ki detalhe - pés e mãos') ?> - Home">
    <meta property="og:description" content="<?= htmlspecialchars($dados['descricao']) ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.kidetalhe.com.br">
    <meta property="og:image" content="https://www.kidetalhe.com.br/src/img/image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?= htmlspecialchars($dados['titulo'] ?? 'Ki detalhe - pés e mãos') ?> - Home">
    <meta name="twitter:description" content="<?= htmlspecialchars($dados['descricao']) ?>">
    <meta name="twitter:image" content="https://www.example.com/src/img/image.jpg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="src/css/style.css">
    <script src="./src/js/lucide.min.js"></script>
    <script src="./src/js/sweetalert2.js"></script>
    <!-- <script src="./src/js/scriptAula1JS.js"></script> -->
</head>

<body>
    <header id="navbar">
        <?php include __DIR__ . '/../../src/partials/navbar.php'; ?>
    </header>
    <main>
        <section id="hero">
            <?php include __DIR__ . '/../../src/partials/hero.html'; ?>
        </section>

        <section id="sobre">
            <?php include __DIR__ . '/../../src/partials/sobre.html'; ?>
        </section>

        <section id="servicos">
            <?php include __DIR__ . '/../../src/partials/servicos.html'; ?>
        </section>

        <section id="precos">
            <?php include __DIR__ . '/../../src/partials/precos.html'; ?>
        </section>

        <section id="galeria">
            <?php include __DIR__ . '/../../src/partials/galeria.html'; ?>
        </section>

        <section id="relatos">
            <?php include __DIR__ . '/../../src/partials/relatos.html'; ?>
        </section>

        <section id="footer">
            <?php include __DIR__ . '/../../src/partials/footer.html'; ?>
        </section>

    </main>
    <button class="btn-topo" aria-label="Voltar ao topo"><i data-lucide="chevron-up"></i></button>
    <footer>

    </footer>



    <script type="text/javascript" src="src/js/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="src/js/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="slick/slick.min.js"></script>
    <script src="./src/js/secoes/modal_mensagem.js"></script>
    <script src="./src/js/main.js" type="module"></script>
</body>

</html>