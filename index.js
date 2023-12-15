var nome = "Zezingamer78"
var xp = 400
var nivel = "Nenhum"

for(let count=0; count < xp; count++){

    if(count <= 1000){
        nivel = "Ferro"
    }else if(count >= 1001 && count <=2000){
        nivel = "Bronze"
    }else if(count >= 2001 && count <=5000){
        nivel = "Prata"
    }else if(count >= 5001 && count <=7000){
        nivel = "Ouro"
    }else if(count >= 7001 && count <=8000){
        nivel = "Platina"
    }else if(count >= 8001 && count <=9000){
        nivel = "Ascendente"
    }else if(count >= 9001 && count <=10000){
        nivel = "Imortal"
    }else if(count >= 10001){
        nivel = "Radiante"
    }
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)