// function for changin div to blue
function blue() {
    squareDiv.style.backgroundColor = "rgb(0, 0, 255)";
}

// function for changing div to black
function black() {
    squareDiv.style.backgroundColor = "rgb(0, 0, 0)";
}

// creates
let squareDiv = document.createElement("div");
    // set width and height
    squareDiv.style.width = "100px";
    squareDiv.style.height = "100px";

    // set staring bg color so its not blank
    squareDiv.style.backgroundColor = "rgb(0, 0, 255)"

    // use on mouse over to change to black using function
    squareDiv.setAttribute ("onmouseover", "black()")
    // use on mouse out to change to blue using function
    squareDiv.setAttribute ("onmouseout", "blue()")

    // place div on page
    document.body.appendChild(squareDiv);