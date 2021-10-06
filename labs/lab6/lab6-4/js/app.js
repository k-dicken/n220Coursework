var hairColor = ["#000000", "#BBBBBB", "#7ff3f5"];

let character = {
    hairColor = "#000000",
    skinColor = "#fae2c8"
}

function setup() {
    createCanvas(500, 400) ;
    background(200);

    for (h = 0; h < hairColor.length; h++) {
        let hairDiv = document.createElement("div");
            hairDiv.style.width = "50px";
            hairDiv.style.height = "50px";
            hairDiv.style.marginRight = "20px";
            hairDiv.style.float = "left"
            hairDiv.style.backgroundColor = hairColor[h];

            squareDiv.setAttribute ("onclick", "setHairColor()");

            document.body.appendChild(hairDiv);

            console.log(hairColor[h]);

            function setHairColor() {

            }
    }   
}

function draw() {
    noStroke();
    // strokeWeight(5);
    
    fill("#fae2c8");
    // neck
    rect(225, 200, 50, 150);
    // head
    circle(250, 200, 225);

    // 

    fill("#7ff3f5");
    circle(100, 100, 150);
    circle(400, 100, 150);
    // body
    circle(250, 425, 200);
    // hair left
    ellipse(125, 220, 75, 100);
    // hair right
    ellipse(375, 220, 75, 100);
    // hair bang
    ellipse(250, 125, 300, 175);
    
    fill("#000000");
    ellipse(200, 225, 25, 75);
    ellipse(300, 225, 25, 75);
    fill("#B44564");
    circle(250, 285, 15);
    
}

