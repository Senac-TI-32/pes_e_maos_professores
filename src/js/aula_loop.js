let contagem = 0
// usando a pergunta lógica
// com if
// filtrar
// os numeros pares

//  for(let i=0; i < 100; i++){
//      contagem = i
//      if(i % 2 ===0){
//         continue
//      }
//      console.log(contagem)
     
//  }
// módulo  % != /
// let resultado = 6 % 2 === 0
// console.log(resultado)

const carrinho_de_compras = [
    "uva", 
    "banana",
    "abacaxi",
    "café",
    "arroz",
    "feijão",
    "cenoura",
    "abacate"
]
console.log(carrinho_de_compras.length)
carrinho_de_compras.sort()
for(let nome of carrinho_de_compras){
    console.log(nome)
}

carrinho_de_compras.forEach((item)=>{
    console.log(item)
})

// loop while

let temperatura_limite = 26
let notificar = 24
let desligar = 29
let temperatura = 18

// sensor de temperatura
while(false){
    let relogio =  setInterval(()=>{
        console.log("passou um segundo e a temperatura é "+ temperatura)
    },1000)
      if(temperatura === notificar){
        console.log("enviar email ao suporte")
      }else if(temperatura >= desligar){
        console.log("desligando")
        clearInterval(relogio)
        break;
      }
    temperatura = temperatura + 1
   

}