var d = 1;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(200);
    circle(400, 300, d);

    d = d + 1;

    if (d > 200) {
        d = 1;
    }

    
}

