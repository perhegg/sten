let player_score = 0
let comp_score = 0
let res = document.getElementById("outcome")

document.getElementById("p").addEventListener('click', function(){
    Dice("p")
})
document.getElementById("s").addEventListener('click', function(){
    Dice("s")
})
document.getElementById("st").addEventListener('click', function(){
    Dice("r")
})

function convertToWord(letter){
if (letter === "r") return "Rock"
if (letter === "p") return "Paper"
return "Scissor"

}

function Tie(user, comp){
    console.log("Tie")
    res.innerHTML = `${convertToWord(user)} ties ${convertToWord(comp)}`

}

function Win(user, comp){
    console.log("Win")
    document.getElementById("player-score").innerHTML = player_score++
    res.innerHTML = `${convertToWord(user)} beats ${convertToWord(comp)}`
}

function Lose(user, comp){
    console.log("Lose")
    document.getElementById("computer-score").innerHTML = comp_score++
    res.innerHTML = `${convertToWord(user)} loses to ${convertToWord(comp)}`


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

    