// Create an application with three grey, square divs, in a row. They should be 200px by 200px, and all floated left. Give them a margin of 5px.
// Using only one event handler, write event listeners to respond to a click on each element. Each element should change to a different color: one red, one green, and one blue. Use a data attribute on the elements to store the color to be changed to.

//

//grab div (make sure divs all have same id)
//add event listener to divs

//function changeColor
    //let color = element.getAttribute("data-color")
    //element.style.background-color = color;
//

//

//grab divs
let clickDiv = document.querySelectorAll(".clickDiv");

//add event listener to divs
for (i = 0; i < clickDiv.length; i++) {
    clickDiv[i].addEventListener("click", changeColor);
}



//function changeColor
function changeColor(event) {
    //color = target getAttribute("data-color")
    let color = event.target.getAttribute("data-color");

    //target background-color = color;
    event.target.style.backgroundColor = color;

}


