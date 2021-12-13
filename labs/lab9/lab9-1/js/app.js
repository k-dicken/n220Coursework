// Takes in a list of comma-separated numbers from the user
// Splits that list into an array of numbers
// Converts the string version of the numbers into number versions
// Loops through the array and sums up the values
// Calculates the average of the array
// Displays to the user The average The sum
// Removes the text from the input so the user can type in new numbers

//

//grab input
//grab display

//function displayCalc
    //split by ,
    //sum = 0
    //for array length
        //add array[i] to sum

    //display inner html = "sum is" + sum + "average is" + sum / array.length;
//

let numInput = document.getElementById("numInput");
let displayDiv = document.getElementById("displayDiv");

// let numNumArray = [];

function displayCalc() {
    let numStringArray = numInput.value.split(",");

    let sum = 0;

    for (i = 0; i < numStringArray.length; i++) {
        sum = sum + Number(numStringArray[i]);
    }

    displayDiv.innerHTML = "Sum is " + sum + "<br>" + "Average is " + sum/numStringArray.length;
}