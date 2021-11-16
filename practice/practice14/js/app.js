//function vowelchecker with letter argument
    //if letter to uppercase == a e i o u
        //return true
    //else
        //return false

//

//input string
let input = document.getElementById('inputText')
let display = document.getElementById('display')

//function vowelchecker with letter argument
function vowelChecker(letter) {

    //if letter to uppercase == a e i o u
    if (letter.toLocaleUpperCase() == "A" || 
        letter.toLocaleUpperCase() == "E" ||
        letter.toLocaleUpperCase() == "I" ||
        letter.toLocaleUpperCase() == "O" ||
        letter.toLocaleUpperCase() == "U") {

        //returns true
        return true;

    //else / all other letters
    } else {

        //returns false
        return false;
    }

}

function vowelCheckDisplay() {
    
    for (i = 0; i < input.value.length; i++) {

        if (vowelChecker(input.value[i]) == true) {

            display.innerHTML = "Vowel Detected";

            break;

        } else {

            display.innerHTML = "Vowel Free";
        }
        
    }

}

//

//function removevowel
    //let vowelfreestring = "";

    //for length of string
        //if vowelchecker(string[i]) == false
            //vowelfreestring = vowelfreestring + string[i]
    
    //return vowelfreestring           

//

//function removevowel
function vowelRemover(string) {
    //let vowelfreestring = "";
    let vowelFreeString = "";

    //for length of string
    for (i = 0; i < string.length; i++) {

        //if vowelchecker(string[i]) == false
        if (vowelChecker(string[i]) == false) {

            //vowelfreestring = vowelfreestring + string[i]
            vowelFreeString = vowelFreeString + string[i];

        }    
    } 
    
    return vowelFreeString;
}


function vowelRemoveDisplay() {

    display.innerHTML = vowelRemover(input.value);

}