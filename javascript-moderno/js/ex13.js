
let hora
hora = 18

if (hora <= 11){

    console.log("Bom dia: " + hora)

} else if((hora >= 11) && (hora <= 17)) {

    console.log("Boa tarde: " + hora)

} else if(hora >= 17){

    console.log("Boa noite: " + hora)

} else{

    console.log("Favor informar a hora certa: ")
}