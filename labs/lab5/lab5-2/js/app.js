// function setup() {

    // loop 100 times
    for (i = 0; i < 100; i++) {
        
        // set colors 255 * random
        let color1 = 255 * Math.random();
        let color2 = 255 * Math.random();
        let color3 = 255 * Math.random();
    
        let squareDiv = document.createElement("div");
        squareDiv.style.backgroundColor = "rgb(" + color1 + ", " + color2 + ", " + color3 + ")";
        console.log(squareDiv.style.backgroundColor);
        squareDiv.style.width = "20px";
        squareDiv.style.height = "20px";
        squareDiv.style.float = "left";
    
        document.body.appendChild(squareDiv);

    }


// }




