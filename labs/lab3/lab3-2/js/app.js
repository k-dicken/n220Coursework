function setup() {

    createCanvas(800, 800);

    // 2 for statements 1 for y, 1 for x

    // box = n x n
    // set y first, limit to 4 boxes (n * 4)
    // set x next, limit to <= y
    for (var y = 0; y < 200; y = y + 50) {
        
        for (var x = 0; x <= y; x = x + 50) {

            // red rectangle command only once
            fill(255, 0, 0);
            stroke(255);
            rect(x, y, 50, 50);
            // ---
        }

    }
}


