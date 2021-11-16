// An application with 3 buttons that ask questions. For instance, they might ask "What is the capital of Indiana?". Each button should have a data-answer attribute that lists the answer.
// When a button is clicked, display the answer to the button's question in a div. Use only one function, and that function must make use of the button's data-attribute.

//

//grab display div

//grab buttons in array
//loop through array and add event listener

//function displayAnswer
    //displaydiv innerhtml = event.target.getAttribute("data-answer")
//

//

//grab display div
let displayDiv = document.getElementById("displayDiv");

//grab buttons in array
let buttons = document.querySelectorAll("#questionButton");
//loop through array and add event listener
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", displayAnswer);
}

//function displayAnswer
function displayAnswer(event) {
    //displaydiv innerhtml = event.target.getAttribute("data-answer")
    displayDiv.innerHTML = event.target.getAttribute("data-answer");
}
    

