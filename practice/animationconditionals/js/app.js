// let spices = 5
let xPos = 0;
let yPos = 0;
let xSpeed = 1;
let ySpeed = 0;

function setup() {
    
    createCanvas(400, 300);

}

function draw() {
    // spices = spices + 1;
    // console.log (spices);

    // how to make it go backwards
    // spices = spices - 1;

    // how to make it go faster
    // spices = spices + 5;

    // how to make it go slower
    // spices = spices + .5;

    // xPos++ means xPos = xPos + 1
    // xPos++;
    // circle(xPos, 200, 30)

    // clear the screen
    background(0,10,210)
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    // var myBool = xPos > 100;
    // console.log(xPos + myBool)

    // if (xPos > 100) {
    //     fill(10, 230, 10)
    // } 

    // else {
    //     fill(210, 10, 0)
    // }

    if (keyIsDown(LEFT_ARROW)) {
        fill(10, 230, 10)
    } 

    else {
        fill(210, 10, 0)
    }
    
    
    circle(xPos, yPos, 30)
}

