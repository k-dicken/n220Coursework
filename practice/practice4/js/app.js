function setup() {
    
    createCanvas(800, 800);
    strokeWeight(8)

}

function draw() {
    background(204)
    for (var i = 20; i < 400; i += 60) {
        line (i, 40, i + 60, 80)
    }
}

