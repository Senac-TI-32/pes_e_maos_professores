
    // aqui é um comentario de uma linha

    /*
        aqui é um comnetario de muitas linhas
        duas formas modernas de criar variáveis em javascript
        com o prefixo let on a variáveis pode ser reatribuida ou trocado o seu valor
        outra é o prefixo const onde o valor não pode ser trocado ou reatribuido, ele é constante
    */
    const nome = "rodrigo" // string = texto
    const sobrenome = 'faustino' // string = texto
    let idade = 42  // number = numero inteiro
    let altura = 1.70 // number = numero decimal
    let vivo = true // boolean = verdadeiro ou falso
    // concatenação = juntar texto e variável
    console.log("O nome é: "+ nome + " e o sobrenome é: "+ sobrenome)
    // template string = juntar texto e variável
    let mensagemFormatada = `O meu nome é ${nome} e a minha idade é ${idade} anos e minha altura é ${altura} metros`
    console.log(mensagemFormatada)
    idade = "xxxxx"
    console.log(idade)