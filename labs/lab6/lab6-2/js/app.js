// virtual pet with name, energy, happiness and age
// display in HTML
// update the info by replacing inner HTML
// function for feeding to increase energy by 5
// function for play to increase happiness
// add buttons for feed
// add button for play


// virtual pet with name, energy, happiness and age
let virtualPet = {
    name: "Rin",
    energy: 5,
    happiness: 3,
    age: 2, 
}

// display in HTML
let petInfo = document.createElement("div");
petInfo.innerHTML = virtualPet.name + ", Age " + virtualPet.age + "<br><br> Energy Level: " + virtualPet.energy + "<br> Happiness Level: " + virtualPet.happiness;

document.body.appendChild(petInfo);

//update the info
function update() {
    petInfo.innerHTML = virtualPet.name + ", Age " + virtualPet.age + "<br><br> Energy Level: " + virtualPet.energy + "<br> Happiness Level: " + virtualPet.happiness;
}


// function for feeding to increase energy by 5
function feed() {
    virtualPet.energy = virtualPet.energy + 5;

    update();
}

// function for play to increase happiness
function play() {
    virtualPet.happiness = virtualPet.happiness + 5;

    update();
}

// add buttons for feed
let feedButton = document.createElement("div");
feedButton.innerHTML = "Feed";
feedButton.style.width = "40px";
feedButton.style.height = "20px";
feedButton.style.textAlign = "center";
feedButton.style.marginTop = "10px";
feedButton.style.float = "left";
feedButton.style.backgroundColor = "#f5d97f";
feedButton.setAttribute("onclick", "feed()");
document.body.appendChild(feedButton);

// add button for play
let playButton = document.createElement("div");
playButton.innerHTML = "Play";
playButton.style.width = "40px";
playButton.style.height = "20px";
playButton.style.textAlign = "center";
playButton.style.marginTop = "10px";
playButton.style.marginLeft = "10px";
playButton.style.float = "left";
playButton.style.backgroundColor = "#f57fdd";
playButton.setAttribute("onclick", "play()");
document.body.appendChild(playButton);
