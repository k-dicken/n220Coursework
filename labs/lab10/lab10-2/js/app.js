// This is an application that will start a div at a black color, and as a user presses buttons associated with RGB, the div will change to new colors. The button presses should affect additively - that is. If a div is currently blue, pressing +red buttons will change the div to a purple color.
// 9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
// 1 div that will change colors to the rgb color calculated
// 1 div that shows the current calculated rgb color
// You must use attributes on the buttons for the values to change the colors by.

//

//grab color div
//grab rbg div

//array of colors [0, 0, 0]

//add event listener

//function createButton(colorNum, increaseNum)
    //document.create element("button")
    //button.setAttribute('data-color', colorNum);
    //button.setAttribute('data-increase', increaseNum);
//

//for i = 0 i <= 2
    //createButton(i, 1);
    //createButton(i, 5);
    //createButton(i, 10);
//

//function addColor 
    //array['data-color'] += array['data-increase']

    //color div style background-color = rgb(array[0], array[1], array[2])
    //rgb div inner html = "current color: rgb(array[0], array[1], array[2])"
//

//

//grab color div
let colorDiv = document.getElementById("colorDisplay");
//grab rbg div
let rgbDiv = document.getElementById("rgbDisplay");

let buttons = document.querySelectorAll("button");

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", addColor);
}

//array of rbg colors 
let colorArray = [0, 0, 0];

colorDiv.style.backgroundColor = "rgb(" + colorArray[0] + ", " + colorArray[1] + ", " + colorArray[2] + ")";
rgbDiv.innerHTML = "Current Color: rgb(" + colorArray[0] + ", " + colorArray[1] + ", " + colorArray[2] + ")";

function addColor(event) {
    let color = event.target.getAttribute("data-color")
    let increase = event.target.getAttribute("data-increase");

    colorArray[color] += parseInt(increase);

    colorDiv.style.backgroundColor = "rgb(" + colorArray[0] + ", " + colorArray[1] + ", " + colorArray[2] + ")";
    rgbDiv.innerHTML = "Current Color: rgb(" + colorArray[0] + ", " + colorArray[1] + ", " + colorArray[2] + ")";
}
