//Create an application that with an input and a button. When the user clicks on the button, update a div on the page to tell the user if what the user typed into the input is divisible by 7 or not. Use a separate function from the onclick function to discern if it is divisible. This function should return either true if it is divisible  or false if it is not.

//

//get input by id
//get display div by id

//on click function

//calc function

//update div function

//

let numInput = document.getElementById("numInput");
let displayDiv = document.getElementById("displayDiv");

function fullCalc() {
    let divSevenBoolean = isDivSeven(numInput.value);
    updateDiv(numInput.value, divSevenBoolean);
}

function isDivSeven(num) {
    if ((num % 7) == 0) {
        return true;
    } else {
        return false;
    }
}

function updateDiv(num, boolean){
    if (boolean == true) {
        displayDiv.innerHTML = num + " is divisible by 7.";
    } else if (boolean == false) {
        displayDiv.innerHTML = num + " is not divisible by 7.";
    } else {
        displayDiv.innerHTML = "Calculation Failed."
    }
    
}