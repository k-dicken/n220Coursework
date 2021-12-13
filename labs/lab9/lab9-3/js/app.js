// Assume that there is a game where if there are three 1's in a row in will count as a "win". 
// Create an application that: 
// Takes input from the user in a text field
// Assumes the input is a set of comma-separated values
// Splits the input into an array
// Uses a loop to check to see if there are three "1s" in a row in the array
// Displays the word "winner" or "not winner" on the document depending on the result

//

//grab user input
//grab display div

//set global win count

//function checkWin
    //split user input
    //for split length
        //if split[i] == 1
            //add 1 to win count
        //else
            //set win count to 0
        
        //if win count == 3
            //display div inner html = winner 
            //break 
        //else
            //display div inner html = not winner      

//

let numInput = document.getElementById("numInput");
let displayDiv = document.getElementById("displayDiv");

let winCount = 0;

function checkWin(){
    let inputNums = numInput.value.split(",");

    for (i = 0; i < inputNums.length; i++) {

        if (Number(inputNums[i]) == 1) {
            winCount = winCount + 1;
        } else {
            winCount = 0;
        }

        if (winCount == 3) {
            displayDiv.innerHTML = "Winner";
            break;
        } else {
            displayDiv.innerHTML = "Not Winner";
        }
    }
 
}