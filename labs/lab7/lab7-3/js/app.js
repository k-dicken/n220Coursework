// Create an application with two input fields and one button.
// When the button is clicked, verify the user has written these (exact) strings in the first and second field:
// First field should be  "Username"
// Second field should be  "Password"
// If the two fields match, update a DIV on the page with the text "Success" or else "Wrong information".
// For this assignment: use only one if statement to to the check.
// Remember you'll need to use the double-equals (==) to check for equality, and the double-ampersand to check if two things are true.
// if( (oneThingIsTrue) && (anotherThingIsTrue) ) {
// }

//

//set var user to username
//set var pass to password
//get user input
//get pass input
//get textDiv
//if userInput == user && passInput == pass
    //update textDiv to Success
//else 
    //update textDiv to Wrong Information

//

//set var user to username
let user = "Username";
//set var pass to password
let pass = "Password";

//get user input
let userInput = document.getElementById("username");
//get pass input
let passInput = document.getElementById("password");
//get textDiv
let textDiv = document.getElementById("textDiv");

//function checkLogin
function checkLogin() {

    console.log(user + " == " + userInput.value);
    console.log(pass + " == " + passInput.value);
    
        //if userInput == user && passInput == pass
    if (userInput.value == user && passInput.value == pass) {
        //update textDiv to Success
        textDiv.innerHTML = "Success";

        //else 
    } else {
        //update textDiv to Wrong Information
        textDiv.innerHTML = "Wrong Information";
    }
        
}

