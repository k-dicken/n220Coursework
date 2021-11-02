//Create an application with an array of strings, at least three. Create three buttons that are associated with those strings. (For instance, you might have 'home', 'about', and 'art'), and a div to display those strings. Using a single function, make it so that when a button is clicked, the div displays the string associated with it in that array. ("home" button shows index 0, "about" shows index 1, so on..).

//

//grab div
//array = "item1, item2, item3"

//function displayItem(arrayNum)
    //div.innerHTML = array[arrayNum]

//

//grab div
let displayDiv = document.getElementById("displayDiv");

//array = "item1, item2, item3"
let arrayItems = ["red", "green", "blue"];

//function displayItem(arrayNum)
function displayItems(arrayNum) {
    
    displayDiv.style.color = arrayItems[arrayNum];

    //place array item in div
    displayDiv.innerHTML = arrayItems[arrayNum];
}
