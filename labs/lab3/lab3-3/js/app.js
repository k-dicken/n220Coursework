function setup() {
    
    createCanvas(800, 800);
    background(200);

    // circles filling the canvas and decreasing each time
    // in for set radius to canvas border and decrease it by n 
    // xy is middle of canvas
    for (var r = 800; r > 0; r = r - 10) {
        circle(400, 400, r);
        console.log(r);
    }
}

