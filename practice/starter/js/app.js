let inputText = document.getElementById("inputText");
let inputNumber = document.getElementById("inputNumber");

function displayText() {
    let string = inputText.value;

    for (var i = 1; i < inputNumber.value; i++) {

        string = string + inputText.value;

    }

    console.log(string);

    string = "";
}