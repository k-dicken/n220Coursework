var x = 0;
var y = 0;

var vx = 5;
var vy = 5;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(200)
    circle(x, y, 50);
    x = x + vx;
    y = y + vy;

    if (x > 600) {
        vx = vx * -1;
    }
    if (x < 0) {
        vx = vx * -1;
    }
    
    if (y > 600) {
        v = vy * -1;
    }
    if (y < 0) {
        v = vy * -1;
    }

    console.log(y)
}

