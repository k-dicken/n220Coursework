// let oos = [ 15, 22, 10, 5 ];
// let ahs = [ "#ed1a80", "#fcba03", "#ed1a80", "#fcba03" ]

// function setup() {
//   createCanvas(400, 400);
  
//     translate(200,200);
//   background(50);
  
//   for( let i = 0; i < oos.length; i++) {
//     fill(ahs[i]);
//     circle(sin(i) * 40, cos(i)* 40, oos[i]);
//   }
// }

// addition goal: add second cruve of circles opposite to first row

// add 4 numbers
let circleSize = [ 15, 22, 10, 5, 15, 22, 10, 5];
// add 4 colors blue to green
let colors = ["#ed1a80", "#fcba03", "#ed1a80", "#fcba03", "#4ede55", "#608fd1", "#4ede55", "#608fd1"]

function setup() {
    // canvas creation
    createCanvas(400, 400);
  
    // starts circles from not 0?
    translate(200,200);
    // background
    background(50);
  
    // try to fit into this equation?
    for( let i = 0; i < circleSize.length; i++) {

        // if the number is greater than 4, circle * -40 else, circle * -40 (didn't work)
        // add number to move it down? if >= 4 then it already flips
        if (i >= 4) {
            fill(colors[i]);
            square((sin(i) * 40) - 30, (cos(i)* 40) + 50, circleSize[i]);
        } else {
            fill(colors[i]);
            circle(sin(i) * 40, cos(i)* 40, circleSize[i]);
        }
    }


    // circle one will be 15 px with color pink
    console.log(circleSize[1], colors[1])
    // circle two will be 22 px with color yellow
    console.log(circleSize[2], colors[2])
    // circle three will be 10 px with color pink
    console.log(circleSize[3], colors[3])
    // circle four will be 5 px with color yellow
    console.log(circleSize[4], colors[4])


    // for( let i = 4; i < circleSize.length; i++) {
    //     fill(colors[i]);
    //     circle(sin(i) * 40, cos(i)* 40, circleSize[i]);
    // }
}


