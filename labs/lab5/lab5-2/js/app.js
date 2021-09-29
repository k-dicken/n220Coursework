    // loop 100 times
    for (i = 0; i < 100; i++) {
        
        // set colors 255 * random with 1 for each r g b for full randomness
        let colorR = 255 * Math.random();
        let colorG = 255 * Math.random();
        let colorB = 255 * Math.random();
        
        // create the div
        let squareDiv = document.createElement("div");

        // set color to each random color
        squareDiv.style.backgroundColor = "rgb(" + colorR + ", " + colorG + ", " + colorB + ")";
        console.log(squareDiv.style.backgroundColor);

        // set width height & float
        squareDiv.style.width = "20px";
        squareDiv.style.height = "20px";
        squareDiv.style.float = "left";

        // place onto page
        document.body.appendChild(squareDiv);

    }




