let whte = 255;
let blck = 0;

function setup() {
    
    createCanvas(1280, 720);
    background(245, 230, 220);

}


function draw() {

    fill(175, 113, 122);
    stroke(175, 113, 122);
    rect(100, 600, 1080, 50);
    
    rect(150, 600, 100, 100,);
    rect(1010, 600, 100, 100,);

    fill(blck);
    stroke(blck);
    rect(480, 450, 300, 150);

    fill(whte);
    stroke(whte);
    rect(150, 450, 300, 150);

    fill(whte);
    stroke(whte);
    rect(800, 450, 300, 150);

    fill(228, 114, 139);
    stroke(228, 114, 139);
    arc(300, 450, 300, 300, radians(180), radians(360));

    fill(250, 140, 90);
    stroke(250, 140, 90);
    arc(950, 450, 300, 300, radians(180), radians(360));

    fill(blck)
    stroke(blck);
    rect(930, 300, 50, 300)
}

function mousePressed() {
    fill(250, 140, 90, 150);
    stroke(250, 140, 90, 150);
    ellipse(mouseX, mouseY, 40);
}


