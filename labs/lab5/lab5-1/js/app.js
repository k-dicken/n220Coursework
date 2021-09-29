// var for width of div; w = 100px
var width = 100;
// var for height of div; h = 100px
var height = 100;

// place div with width w, height h, green background
let squareDiv = document.createElement("div");''
squareDiv.style.backgroundColor = "#00FF00";
squareDiv.style.width = width + "px";
squareDiv.style.height = height + "px";
squareDiv.setAttribute ("onclick", "increaseSize()");

document.body.appendChild(squareDiv);

// function for when click happens
function increaseSize() {
    // w = w * 1.1 & h = h * 1.1 to increase size by 10%
    width = width * 1.1;
    height = height * 1.1;

    // refreshes width and height on div
    squareDiv.style.width = width + "px";
    squareDiv.style.height = height + "px";
}



