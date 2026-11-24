<?php

    // VIEW> 404 Página não encontrada

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página não encontrada - <?= htmlspecialchars($dados['nome'] ?? 'Ki Detalhe' ) ?></title>
    <link rel="stylesheet" href="src/css/base.css">    
</head>
<body>

    <main>
        <h1>Página não encontrada</h1>
        <p>A página que você procura não existe</p>
        <p>
            <a href="index.php">Voltar a página inicial</a>
        </p>
    </main>
    
</body>
</html>