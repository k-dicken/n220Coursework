let sqColorR = 0;
let sqSize = 40;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    fill(sqColorR, 82, 138);
    rect(0, 0, sqSize, sqSize);
    sqSize = sqSize + 1;
    sqColorR += 1;

    if(sqColorR > 198) { 
        sqColorR -= 1;
    }
}

