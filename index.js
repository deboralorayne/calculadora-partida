function calcularRankeadas(vitorias, derrotas){
let saldoVitorias = vitorias - derrotas


let nivel
    if (saldoVitorias < 10){
    nivel = "Ferro"
    }else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze"  
}   else if (vitorias >= 21 && vitorias <= 50){
    nivel  = "Prata"
}   else if (vitorias >= 51 && vitorias <= 80){
    nivel = "Ouro"
}   else if (vitorias >= 81 &&  vitorias <= 90){
    nivel = "Diamante"
}   else if (vitorias >= 91 && vitorias <= 100){
    nivel = "Lendário"  
}   else {
    nivel = "Imortal"
}

console.log("O herói tem de saldo de  " + saldoVitorias + " está no nível de " + nivel + "." )
}
calcularRankeadas(89, 85656)