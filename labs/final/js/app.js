//Concentration 
//by Kylee Dicken
//11/29/21

//

//CHECK CARDS ON CLICK PSEDUO CODE

//var prevbutton
//var currentbutton

//var selectCardOne = "";
//var selectCardTwo = "";


//function determineOutcome
    //set event target background color to dataset color

    //if selectCardOne == "" 
        //set cardOne to event target's dataset color
    //else if selectCardTwo == ""
        //set cardTwo to event target's dataset color

        //if selectcardone == selectcardtwo 
            //set timeout set event target bg color to white
        //else 
            //set timeout set event target bg color to grey
            //set timeout set prevbutton bg color to grey
    //

//

//GENERATE GAME PSEUDO CODE

//array of colors

//

//SAVE AND SET HIGH SCORES PSEUDO CODE

//grab highscore p
//display highscores when starting page, check if variable is set & display to correct p using for & ifs
//set game num to game size when generating game
//upon game completion, send score to local storage under highScore[gameNum]

//

//HTML DIV VARIABLES
//all buttons that begin game
let gameButtons = document.querySelectorAll(".gameButton");
//high scores p
let highScores = document.querySelectorAll(".highScore");
//button to reload the page
let resetButton = document.getElementById("resetButton");
//move counter display
let moveDisplay = document.getElementById("pMoves");

//GAME TYPE
let gameNum = null;

//all possible colors to be generated in the game
let dataColors = ["red", "red", "blue", "blue", "yellow", "yellow", "green", "green", "orange", "orange", "teal", "teal", "purple", "purple", "pink", "pink", "black", "black", "chocolate", "chocolate", "coral", "coral", "lightgreen", "lightgreen", "aqua", "aqua", "tan", "tan", "darkgreen", "darkgreen", "lightblue", "lightblue", "darkmagenta", "darkmagenta", "darkred", "darkred"];
//global of length of colors so it stays consistent after getting manipulated
let dataColorsLength = dataColors.length;

//CLICKED DIVS VARIABLES
var prevDiv = "";
var currentDiv = "";

//CARD VARIABLES
//first card clicked
var cardOne = "";
//second card clicked
var cardTwo = "";

//click count for user's click score (being cards clicked)
var userClickCount = 0;

//WIN VARIABLES
//win amount for score needed to win
var winAmount = null;
//win count for users current score (being sets completed)
var winCount = 0;


//display highScores
for (i = 0; i < highScores.length; i++) {
    if (localStorage.getItem("highScore" + highScores[i].dataset.game) != null) {
        highScores[i].innerHTML = localStorage.getItem("highScore" + highScores[i].dataset.game);
    }
}

//stores the last two clicked cards
function storeClicked(event){
    //moves the current div to prev div
    prevDiv = currentDiv;
    //sets the current div to new target
    currentDiv = event.target;
} 

//generates a new game
function generateGame(event){
    gameNum = event.target.dataset.size;

    //shrinks the color array to fit the size of the game (so that there is a even number of pairs)
    for (i = 0; i < (dataColorsLength - (event.target.dataset.size * event.target.dataset.size)); i++) {
        dataColors.pop();
    }

    //creates cards based on size of of the game selected
    for(i = 0; i < (event.target.dataset.size * event.target.dataset.size); i++) {
        //creating card
        let card = document.createElement("div");

        //choosing a random num and setting that num to a var to keep it consistent throughout loop iteration
        let arrayNum = Math.floor(Math.random() * dataColors.length);

        //adding styling
        card.style.height = 400 / event.target.dataset.size + "px";
        card.style.width = 400 / event.target.dataset.size + "px";
        card.classList.add("card");
        card.dataset.color = dataColors[arrayNum];
        
        //adding listener for the check card function
        card.addEventListener("click", checkCard);

        //adding onto page
        document.body.appendChild(card);

        //if the row is complete, add a break to move to next row
        if (((i + 1) % event.target.dataset.size) == 0 && i != 0) {
            let br = document.createElement("br");
            document.body.appendChild(br);
        } 

        //remove the random color used from the array
        dataColors.splice(arrayNum, 1);

    }
    
    //remove the generate new game buttons after they are used (to avoid adding another game on top of the other game)
    for(i = 0; i < gameButtons.length; i++) {
        gameButtons[i].style.display = "none";
    }

    resetButton.style.display = "block";

    //set win amount to the number of sets in the game
    winAmount = (event.target.dataset.size * event.target.dataset.size) / 2;
}

//reload the page for reload board button
function reloadPage() {
    window.location.reload();
}

//all the checks for when a card is clicked
function checkCard(event) {
    //if either of the cards are not set (to avoid things being updated while 2 cards are already set)
    if (cardOne == "" || cardTwo == "") {
        //set event target background color to dataset color
        event.target.style.backgroundColor = event.target.dataset.color;

        //increase click score
        userClickCount = userClickCount + 1;
        //update click score
        moveDisplay.innerHTML = userClickCount;

        //save the clicked div
        storeClicked(event);
    }

    //if card one is not set 
    if (cardOne == "") {
        //set cardOne to event target's dataset color
        cardOne = event.target.dataset.color;

        //remove listener so it can't be set to cardTwo
        event.target.removeEventListener("click", checkCard);

    //else if card two is not set
    } else if (cardTwo == "") {
        //set cardTwo to event target's dataset color
        cardTwo = event.target.dataset.color;

        //check if cardone == cardtwo 
        if (cardOne == cardTwo) {
            //set timeout set event target and prev div bg color to white
            setTimeout(function() {
                event.target.style.backgroundColor = "white"; 
                prevDiv.style.backgroundColor = "white";
                
                //reset cardone and cardtwo
                cardOne = "";
                cardTwo = "";
            }, 1000);

            //remove event listeners on inactive cards
            event.target.removeEventListener("click", checkCard);
            prevDiv.removeEventListener("click", checkCard);

            //increase win count by 1 set
            winCount = winCount + 1;
            
        //if cardone does not equal cardtwo 
        } else {
            //set timeout set event target bg and prev div color to grey
            setTimeout(function() {
                event.target.style.backgroundColor = "grey"; 
                prevDiv.style.backgroundColor = "grey"; 
                
                //add event listeners back to the active cards
                event.target.addEventListener("click", checkCard);
                prevDiv.addEventListener("click", checkCard);

                //reset cardone and cardtwo
                cardOne = "";
                cardTwo = "";
              }, 1000);

        }
    }

    //check to see if user won
    if (winAmount == winCount) {
        console.log(localStorage.getItem("highScore" + gameNum) + "<=" + userClickCount);

        if (localStorage.getItem("highScore" + gameNum) != null && localStorage.getItem("highScore" + gameNum) >= userClickCount) {
            localStorage.setItem("highScore" + gameNum, userClickCount);
        }
        
        setTimeout(function() { 
            //tell the user they won and provide the final score           
            alert("Game Complete!\nYour Final Score was " + userClickCount + ".");
            //reload the page so a new game can be played
            window.location.reload();
        }, 2000);
            
    }
    

}



