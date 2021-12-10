//grab div
//grab buttons

//add listener to div

//function getplayermove
    //return event attr 

//function getcommove
    //array of moves
    //return array[Math.floor(Math.Random * 3)]

//function findOutcome
    //if getcommove() = getplayermove()
        //return TIED
    //else if getcommove() == scissors && getplayermove() == paper 
        //return COM WON
    //else if getcommove() == paper && getplayermove() == scissors 
        //return PLAYER WON
    //else if getcommove() == rock && getplayermove() == paper 
        //return PLAYER WON
    //else if getcommove() == paper && getplayermove() == rock 
        //return COM WON
    //else if getcommove() == scissors && getplayermove() == rock 
        //return PLAYER WON
    //else if getcommove() == rock && getplayermove() == scissors 
        //return COM WON

//function displayOutcome
    //div.innerHTML = PLAYER chose getplayermove() and COM chose getcommove(), findoutcome()        

//

//grab div
let displayDiv = document.getElementById("displayDiv");

//grab buttons
let buttons = document.querySelectorAll("playerMoveButton");

let comMove = getCOMMove();

// //add listener to div
// for (i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", displayOutcome);
// }


//function getplayermove
function getPlayerMove(event) {
    //return event attr 
    return event.target.getAttribute("data-move");
}

//function getcommove
function getCOMMove() {
        //array of moves
        let moves = ["rock", "paper", "scissors"];

        //return array[Math.floor(Math.Random * 3)]
        return moves[Math.floor(Math.random()*3)];
}


//function findOutcome
function findOutcome(event) {
    if (comMove == getPlayerMove(event)) {
        return "BOTH TIED";
    } else if (comMove == "scissors" && getPlayerMove(event) == "paper") {
        return "COM WON"
    } else if (comMove == "paper" && getPlayerMove(event) == "rock") {
        return "COM WON"
    } else if (comMove == "rock" && getPlayerMove(event) == "scissors") {
        return "COM WON"
    } else if (getPlayerMove(event) == "scissors" && comMove == "paper") {
        return "PLAYER WON"
    } else if (getPlayerMove(event) == "paper" && comMove == "rock") {
        return "PLAYER WON"
    } else if (getPlayerMove(event) == "rock" && comMove == "scissors") {
        return "PLAYER WON"
    }
}
    //if getcommove() = getplayermove()
        //return TIED
    //else if getcommove() == scissors && getplayermove() == paper 
        //return COM WON
    //else if getcommove() == paper && getplayermove() == scissors 
        //return PLAYER WON
    //else if getcommove() == rock && getplayermove() == paper 
        //return PLAYER WON
    //else if getcommove() == paper && getplayermove() == rock 
        //return COM WON
    //else if getcommove() == scissors && getplayermove() == rock 
        //return PLAYER WON
    //else if getcommove() == rock && getplayermove() == scissors 
        //return COM WON

//function displayOutcome
function displayOutcome(event) {
    console.log(getPlayerMove(event) + " == " + comMove)

    displayDiv.innerHTML = "PLAYER chose " + getPlayerMove(event) + " and COM chose " + comMove + ", " + findOutcome(event);

    comMove = getCOMMove();
}
    //div.innerHTML = PLAYER chose getplayermove() and COM chose getcommove(), findoutcome()        
