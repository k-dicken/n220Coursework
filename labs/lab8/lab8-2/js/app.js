// Make a function that takes a string, and removes every instance of "#" from the string, and returns the "cleaned up" version without the hashtags/octothorpes. 
// Write a web page to test the function - one button and input, and one div. When the button is pressed, take the input, use the function to remove the hashtags, and show the result string on the page.

//

//retrieve input
//retrive display div

//let originalString = input.value

//function cleanUp(string)
    //for i = 0, i < string, i++
        //let cleanedString = [];
        //if string[i] != # 
            //cleanedString.push(string[i]);
        //return cleanedString

//function display()
    //display.innerHTML = cleanUp(originalString);

//

//retrieve input
let txtInput = document.getElementById("txtInput");
//retrive display div
let displayDiv = document.getElementById("displayDiv");

//let originalString = input.value
let originalString = txtInput.value;

//function cleanUp(string)
function cleanUp(string) {
    //let cleanedString = [];
    let cleanedString = "";

    //for i = 0, i < string, i++
    for (i = 0; i < string.length; i++) {
        //if string[i] != # 
        if (string[i] != "#") {
            //cleanedString.push(string[i]);
            cleanedString = cleanedString + string[i];
            // console.log(originalString[i]);
        }
    }

    //return cleanedString
    return(cleanedString);
}


//function display()
function display() {
    let originalString = txtInput.value;

    //display.innerHTML = cleanUp(originalString);
    displayDiv.innerHTML = cleanUp(originalString);
    console.log(cleanUp(originalString));
}