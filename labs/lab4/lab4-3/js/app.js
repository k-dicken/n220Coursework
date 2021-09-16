let y = [];
let x = [];
var canvasHeight = 400;
var canvasWidth = 400;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(200);
}

function draw() {
    background(200);

    fill(255, 0, 0)

    if (mouseIsPressed) {
        y.push(mouseY);
        x.push(mouseX);

        // console.log("brick go time")
    }

    for (var n = 0; n < y.length; n++) {
        y[n] = y[n] + 5;

        rect (x[n], y[n], 100, 50);

        if (y[n] >= canvasHeight) {
            y.shift();
            x.shift();

            // console.log("brick bye time")
        }

    }

    // console.log(x[n]);
}

