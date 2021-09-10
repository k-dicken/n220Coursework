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

    // makes x & y move
    x = x + vx;
    y = y + vy;

    // reverses x velocity when hitting border
    if (x > 800) {
        vx = vx * -1;
    }
    if (x < 0) {
        vx = vx * -1;
    }

    // reverses y velocity when hitting border
    if (y > 600) {
        vy = vy * -1;
    }
    if (y < 0) {
        vy = vy * -1;
    }

//     // console.log("y" + vy)
//     console.log("x" + vx)
//     console.log("x" + x)
//     // console.log("y" + y)
}

