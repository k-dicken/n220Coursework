    //original

// let h = 50;
//   let kl = 100;
//   let pol = .1;
//   let r = 10;
//   let j = 10;


// function setup() {
//   createCanvas(400, 400);
  
//   fill(255,0,0);

//   //draws a sine curve
//   for(let i = 0, i < 50; i++) {
//     let zf = Math.sin(i * pol) * r;
//     circ(i * j + h, zf + kl, 20);

    // fixed

let initialX = 50;
let initialY = 100;
let sinDecrease = .1;
let increaseY = 100;
let circleSpacing = 10;


function setup() {
    createCanvas(800, 400);
  
    // fills circles with red
    fill(255,0,0);

    //draws a sine curve
    for(var i = 0; i < 50; i++) {

        // creates curve for Y
        let curveY = Math.sin(i * sinDecrease) * increaseY;

        // creates circles in a line with the curve for Y
        circle(i * circleSpacing + initialX, curveY + initialY, 10);

        // console.log ((i * pol) * r);
        // console.log (zfkl);
    }
}

    //animated

// let initialX = 50;
// let initialY = 100;
// let sinDecrease = .1;
// let increaseY = 10;
// let increaseX = 10;
    
    
// function setup() {
//     createCanvas(400, 400);
// }

// function draw(){
//         // fills circles with red
//         fill(255,0,0);

//         //draws a sine curve
//         for(var i = 0; i < 50; i++) {
    
//             // creates curve for Y
//             let curveY = Math.sin(i * sinDecrease) * increaseY;
        
//             let x = i * increaseX + initialX;

//             // creates circles in a line with the curve for Y
//             circle(x, curveY + initialY, 20);
    
//         }

//         var x = x++;
// }   