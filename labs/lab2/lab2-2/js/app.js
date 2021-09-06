var canvasWidth = 400
function setup() {
    
    createCanvas(canvasWidth, 300);

}

function draw() {
background(200)
    if (mouseX > canvasWidth/2){
        fill(255,0,0)
    } if (mouseX < canvasWidth/2){
        fill(0,0,255)
    } 

    circle(mouseX, mouseY, 40)
} 


