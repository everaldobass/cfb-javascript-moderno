// Comando Switch Case em Javascript 

let colocacao = 6

switch (colocacao) {
    case 1:
        console.log("Primeiro lugar")
        
        break

    case 2:
        console.log("Segundo Lugar")
        break

    case 3:
        console.log("Segundo Lugar")
        break

    case 4: case 5: case 6:
        console.log("Premio de participação!")
        break

    default:
        console.log("Não foi classificado! ")
        break;
}