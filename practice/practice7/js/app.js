var yOne = 300;
var yTwo = yOne - 100;

var xOne = 400;
var xTwo = 400;

function setup() {
    
    createCanvas(800, 800);

    // // console.log(yOne);
    // // console.log(yTwo);

    // // line one

    // line(xOne, yOne, xTwo, yTwo);

    // // 
    // // line two (straight)

    // yTwo = yOne - ((yTwo - yOne) * (2/3));

    // stroke(255,0,0)
    // line(xOne, yOne, xTwo, yTwo);

    // // 
    // // line two

    // stroke(0,255,0)
    // line(xOne, yOne, 445, yTwo);
    // stroke(0,0,255)
    // line(xOne, yOne, 355, yTwo);

    // // 
    // // line three

    // yOne = yTwo;
    // yTwo = yOne;

    // yTwo = yOne - ((yTwo - yOne) * (2/3));

    // stroke(0,255,255)
    // line(xOne, yOne, 445, yTwo);
    // // stroke(255,0,255)
    // // line(xOne, yOne, 355, yTwo);

    // console.log(yOne);
    // console.log(yTwo);
    // console.log(xOne);
    // console.log(xTwo);

    for (let i = 0; i < 3; i++) {
        
        line(xOne, yOne, xTwo, yTwo);

        yTwo = yOne - ((yTwo - yOne) * (2/3));
        
        
    }

}



