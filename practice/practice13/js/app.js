//retrive div
//retrive input
//array of fortunes
//function displayFortune
    //div innerHTML = fortuneArray[Math.floor * (Math.random() * fortuneArray.length)];
// function addFortune
    //fortune.push("inputFortune.value")

//

//retrive div
let displayDiv = document.getElementById("displayDiv");
//retrive input
let fortuneInput = document.getElementById("txtInputFortune");

//array of fortunes
let fortunes = ["You will be happy.", "You will find 5 dollars.", "You will get a high five."];

//function displayFortune
function displayFortune() {

    //div innerHTML = fortuneArray[Math.floor * (Math.random() * fortuneArray.length)];
    displayDiv.innerHTML = fortunes[Math.floor(Math.random() * fortunes.length)];

}

// function addFortune
function addFortune() {

    //fortune.push("inputFortune.value")
    fortunes.push(fortuneInput.value);

}

