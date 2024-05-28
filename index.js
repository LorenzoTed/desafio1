let nome = "Link"

let nivel = "indefinido"

let XP = 0
while (XP <= 10001){
console.log (XP++)}

if (XP >= 10001) {
    nivel = "Radiante"
} 
else if (XP >= 9001) {
    nivel = "Imortal"
} 
else if (XP >= 8001) {
    nivel = "Ascendente"
} 
else if (XP >= 7001) {
    nivel = "Platina"
}
else if (XP >= 6001) {
    nivel = "Ouro"
} 
else if (XP >= 5000) {
    nivel = "Prata"
} 
else if (XP >= 2001) {
    nivel = "Bronze"
} 
else if (XP <= 1000) {
    nivel = "Ferro"
}

console.log ("O herói de nome " + nome + " está no nível " + nivel)
