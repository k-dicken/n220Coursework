function blue() {
    squareDiv.style.backgroundColor = "rgb(0, 0, 255)";
}

function black() {
    squareDiv.style.backgroundColor = "rgb(0, 0, 0)";
}

let squareDiv = document.createElement("div");
        squareDiv.style.width = "100px";
        squareDiv.style.height = "100px";
        squareDiv.style.backgroundColor = "rgb(0, 0, 255)"
        squareDiv.setAttribute ("onmouseover", "black()")
        squareDiv.setAttribute ("onmouseout", "blue()")
        // squareDiv.style.float = "left";

        document.body.appendChild(squareDiv);