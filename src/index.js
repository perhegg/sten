let player_score = 1
let comp_score = 1
let resultat = document.querySelector(".items--9")

document.querySelector(".paper").addEventListener('click', function(){
    Dice("p")
})
document.querySelector(".scissors").addEventListener('click', function(){
    Dice("s")
})
document.querySelector(".rock").addEventListener('click', function(){
    Dice("r")
})

document.querySelector(".restart").addEventListener('click', function(){
    location.reload()
})

function Won_or_lost() {
    if (player_score === 2) {
        document.querySelector(".popup").classList.add('popup--open');
        document.querySelector(".popup__text").innerHTML = "You won!";
    } else if (comp_score === 2) {
        document.querySelector(".popup").classList.add('popup--open');
        document.querySelector(".popup__text").innerHTML = "You lost!";
    }
}

function addClassName() {
    document.querySelector(".paper").classList.add('items--5--effect')
    document.querySelector(".rock").classList.add('items--3--effect')
    document.querySelector(".scissors").classList.add('items--4--effect')
}

function removeClassName(comp) {
        if(comp === "p") {
            setTimeout(function(){
            document.querySelector(".paper").classList.remove('items--5--effect')
            }, 2000)    
        } else if(comp==="s") {
            setTimeout(function(){
                document.querySelector(".scissors").classList.remove('items--4--effect')
                }, 2000)    
        } else if(comp==="r") {
            setTimeout(function(){
                document.querySelector(".rock").classList.remove('items--3--effect')
                }, 2000)    
        } else if ("all") {
            setTimeout(function(){
                document.querySelector(".paper").classList.remove('items--5--effect')
                document.querySelector(".scissors").classList.remove('items--4--effect')    
                document.querySelector(".rock").classList.remove('items--3--effect')
                }, 4000)    
        }
}

function convertToWord(letter){
if (letter === "r") return "Rock"
if (letter === "p") return "Paper"
return "Scissor"

}

function Tie(user, comp){
    console.log("Tie")
    setTimeout(function(){
        resultat.innerHTML = `<div class="outcome">${convertToWord(user)} ties ${convertToWord(comp)}</div>`
    }, 2000)

}

function Win(user, comp){
    console.log("Win")
    setTimeout(function(){
        document.querySelector(".player--score").innerHTML = player_score++
        resultat.innerHTML = `<div class="outcome">${convertToWord(user)} beats ${convertToWord(comp)}</div>`
        Won_or_lost()
    }, 2500)
}

function Lose(user, comp){
    console.log("Lose")
    setTimeout(function(){
        document.querySelector(".computer--score").innerHTML = comp_score++
        resultat.innerHTML = `<div class="outcome"> ${convertToWord(user)} loses to ${convertToWord(comp)}</div>`
        Won_or_lost()
    }, 2500)
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

    addClassName()
    removeClassName(comp)
    removeClassName("all")
}
    