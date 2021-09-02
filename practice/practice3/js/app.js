let circleSize = 1;

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(255)
    fill(50);
    circle(mouseX, mouseY, circleSize, circleSize);

    if (mouseIsPressed) {
    circleSize = circleSize + 1;
    }

    if (circleSize > 50) {
        circleSize = 50
    }

}

// function mouseIsPressed() {
//     if(circleSize <=50) {
//         circleSize = circleSize + 5;
//     }
// }


