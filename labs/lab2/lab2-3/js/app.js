var x = 0

function setup() {
    
    createCanvas(800, 600);

}

function draw() {
    background(200);
    circle (x, 300, 50);
    x = x + 5;

    if (x > 800) {
        x = 0;
    }
}

