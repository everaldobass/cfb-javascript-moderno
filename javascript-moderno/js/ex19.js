// A continueinstrução interrompe uma iteração (no loop), se ocorrer uma condição especificada, e continua com a próxima iteração no loop.


// Continue
let n = 0
let max = 100

for(let i = n; i < max; i++){

    if(i === 10){
        break
        //continue

    } 

    console.log("Valor de I: " + i)
}