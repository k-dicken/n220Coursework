//circle that moves across the screen and a button that reverses it

//create canvas 
//add a circle moving in one direction
//function to reverse the circle
//button for function under canvas
//if circle goes off canvas game over

//need: var, p5 canvas & draw, fill & circle, function, html
//resources: previous code & notes from lectures

//
// -- START
//
let canvasSize = {
    width: 600,
    height: 400,
}

let crcle = {
    x: 0,
    y: 300,
    velocity: 10
}

//create canvas 
function setup() {
    createCanvas(canvasSize.width, canvasSize.height);

}



//add a circle moving in one direction
function draw() {
    background(200);
    fill(255, 0, 0);
    circle(crcle.x, crcle.y, 50);

    crcle.x = crcle.x + crcle.velocity;

    //if circle goes off canvas game over
}

// while (crcle.x  (canvasSize.width + 10)) {
    if (crcle.x >= canvasSize.width) {
        canvasSize.width = 0;
        canvasSize.height = 0;
    
        reverseButton.style.display = "none"
    
        let gameOverScreen = document.createElement("div");
        gameOverScreen.innerHTML = `GAME OVER <br> Refresh to play again!`
        gameOverScreen.style.height = "400px";
        gameOverScreen.style.width = "600px";
        // gameOverScreen.style.backgroundColor = "";
        // gameOverScreen.setAttribute("onclick", "reverseVel()"); 
        document.body.appendChild(gameOverScreen);
    }
// }


//function to reverse the circle
function reverseVel() {
    crcle.velocity = crcle.velocity * -1;
}

//button for function under canvas
let reverseButton = document.createElement("div");
    reverseButton.style.height = "20px";
    reverseButton.style.width = "100px";
    reverseButton.style.backgroundColor = "#ff00ff";
    reverseButton.setAttribute("onclick", "reverseVel()"); 
document.body.appendChild(reverseButton);



