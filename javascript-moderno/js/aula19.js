// Entenda as declarações BREAK e CONTINUE em Javascript - Curso de Javascript Moderno - Aula 19

let n = 0
let max = 1000

while(n < max){
    console.log("Break " + n)

    if(n >= 10){
        break
    }

    n++
}
console.log("Fim do programa: ")
