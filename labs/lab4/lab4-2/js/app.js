var i = 0;
var positionsY = [];
var canvasHeight = 400;
var canvasWidth = 400;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background (200);
}

function draw() {       
    frameRate(30);    

    background (200);
    fill (0, 0, 255);

    // counts each frame
    i = i + 1;

    // every 10th frame it resets & draws circle
    if (i == 10) {
        i = 0;
        
        positionsY.push(0);
    }

    // moves the circle
    for (var n = 0; n < positionsY.length; n++) {
        circle (canvasWidth / 2, positionsY[n], 10);

        positionsY[n] = positionsY[n] + 5;
        
        // if the circle goes off the canvas (y = 800) 
        if (positionsY[n] >= canvasHeight) {
            positionsY.shift();
        }

    }

}

