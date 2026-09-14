async function enviarEmail(dados){
    const resultado = await fetch("./backend/public/index.php",{
        method: "POST",
        body: JSON.stringify(dados)
    })
    const resposta = await resultado.json()
    return resposta
}
export {enviarEmail}