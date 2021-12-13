// Given the array
// Write a loop that creates three divs based on the data in the array. You should only have one document.createElement in your code.

//

//objects

//for objects length
    //createelement
    //style.backgroundcolor = object[i].color
    //style.height = object[i].height + "px"
    //style.width = object[i].width + "px"
    //appendchild

//

let objects = [
    {color: "#FF0000", height: 100, width: 300},
    {color: "#FFFF00", height: 200, width: 200},
    {color: "#ff0000", height: 300, width: 100},  
];

for (i = 0; i < objects.length; i++) {
    let objDiv = document.createElement("div");

    objDiv.style.backgroundColor = objects[i].color;
    objDiv.style.height = objects[i].height + "px";
    objDiv.style.width = objects[i].width + "px";

    document.body.appendChild(objDiv);
}