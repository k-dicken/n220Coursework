// Create a number guessing name, using an input and a button to gather a number.
// The number to be guessed should be a randomly generated number between 1 and 20.
// When the button is clicked, tell the user if the number is too high, equal to, or too low than a number you have hard-coded in your application.
// When the right answer is guessed, generate a new random number for the user to guess towards and prompt the user to continue to guess for this new number.
// Remove the text in the input when the user clicks the button.

//

//generate random number 1 - 20 assigned to a var
//function assigned to button
    //if input value > num
        //update div to say too high
    //else if value < num
        //update div to say too low
    //else if value == num 
        //update div to say Correct! The answer was num. A new number has been generated
        //num = random number 1 - 20

//

//generate random number 1 - 20 assigned to a var
let ranNum = Math.floor(Math.random() * 20);
let guess = document.getElementById("guess");
let textDiv = document.getElementById("textDiv")

//function assigned to button
function numCheck() {
    //if input value > num
    if (guess.value > ranNum) {
       //update div to say too high
        textDiv.innerHTML = "Your guess was too high. Try again."

    //else if value < num
    } else if (guess.value < ranNum) {
        //update div to say too low
        textDiv.innerHTML = "Your guess was too low. Try again."

         //else if value == num 
    } else if (guess.value == ranNum) {
        //update div to say correct
        textDiv.innerHTML = "Correct! " + guess.value + " was the number!<br>A new number has been generated. Please guess again."

        //set num = random number 1 - 20
        ranNum = Math.floor(Math.random() * 20);
    } else {
        textDiv.innerHTML = "Invalid Entry. Please try again."
    }

}

