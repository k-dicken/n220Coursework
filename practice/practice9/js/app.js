// for (a = 1; a <= 10; a++) {
//     console.log(a);
// }

// 

// for (b = 10; b >= 1; b--) {
//     console.log(b);
// }

// 

// var d = 0;
// var e = 1;

// for (c = 1; c <= 20; c++) {
    
//     let f = d + e;
//     // console.log(f + "=" + d + "+" + e);
//     console.log(f);

//     d = e;
//     e = f;
// }

// 

// var d = 0;
// var e = 1;

// function setup() {
    
//     createCanvas(1200, 800);

//     for (c = 1; c <= 20; c++) {
    
//         let f = d + e;
//         // console.log(f + "=" + d + "+" + e);
//         console.log(f);
    
//         d = e;
//         e = f;
    
//         circle(f, f, 50);
//     }

// }

// 

// var d = 0;
// var e = 1;

// function setup() {
    
//     createCanvas(1200, 800);

//     for (c = 1; c <= 20; c++) {
    
//         let f = d + e;
//         // console.log(f + "=" + d + "+" + e);
//         console.log(f);
    
//         d = e;
//         e = f;

//         if (f % 2) {
//             fill (255, 255, 0);
//         } else {
//             fill (0, 0, 255);
//         }
    
//         circle(f, f, 50);
//     }

// }

// 

// let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ];

// for (i = 0; i < words.length; i++) {


//     words.unshift(words[words.length - 1]);
//     words.pop();

//     console.log(words);
// }

// 

// let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ];
// let wordsUpperCase = [];

// function setup() {
    
//     for (i = 0; i < words.length; i++) { 

//         wordsUpperCase.push(words[i].toUpperCase());
//     }

//     console.log(wordsUpperCase);

// }

// 
let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ];

var newString = " ";

for (i = 0; i < words.length; i++) {

    newString = newString + (words[i] + "! Yeah! ");
    
}

console.log(newString);






