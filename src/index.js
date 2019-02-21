let player_score = 1
let comp_score = 1
let resultat = document.getElementById("outcome")

document.getElementById("p").addEventListener('click', function(){
    Dice("p")
})
document.getElementById("s").addEventListener('click', function(){
    Dice("s")
})
document.getElementById("st").addEventListener('click', function(){
    Dice("r")
})
document.getElementById("restart").addEventListener('click', function(){
    location.reload()
})

function Won_or_lost() {
    if (player_score === 11) alert("You've won!!!!")
    if (comp_score === 11) alert("You're a loser!!!!")  
}

function convertToWord(letter){
if (letter === "r") return "Rock"
if (letter === "p") return "Paper"
return "Scissor"

}

function Tie(user, comp){
    console.log("Tie")
    resultat.innerHTML = `${convertToWord(user)} ties ${convertToWord(comp)}`

}

function Win(user, comp){
    console.log("Win")
    document.getElementById("player-score").innerHTML = player_score++
    resultat.innerHTML = `${convertToWord(user)} beats ${convertToWord(comp)}`
    Won_or_lost()
}

function Lose(user, comp){
    console.log("Lose")
    document.getElementById("computer-score").innerHTML = comp_score++
    resultat.innerHTML = `${convertToWord(user)} loses to ${convertToWord(comp)}`
    Won_or_lost()
}

function getNumber(){
    const val = ["r", "p", "s"]
    const randNumber = Math.floor(Math.random() *3);
    return val[randNumber]
}

function Dice(user) {
    const comp = getNumber()
        
        switch (user+comp) {
        case "rr":
        case "pp":
        case "ss":
        Tie(user, comp)
        break;
        case "rs":
        case "pr":
        case "sp":
        Win(user, comp)
        break;
        case "rp":
        case "ps":
        case "sr":
        Lose(user, comp)
        break;
    }
}
    