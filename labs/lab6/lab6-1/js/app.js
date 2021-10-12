// array object for all games
let zeldaGames = [

    {title: "The Original Legend of Zelda", console: "NES", ownedOn: "None", year: 1989},
    {title: "Zelda 2", console: "NES", ownedOn: "None", year: 1996},
    {title: "A Link to the Past", console: "SNES", ownedOn: "Wii U", year: 1996},
    {title: "Link's Awakening", console: "Gameboy", ownedOn: "None", year: 1996},
    {title: "Oracle of Ages & Seasons", console: "Gameboy", ownedOn: "Nintendo 3DS", year: 1998},
    {title: "Minish Cap", console: "Gameboy Advance", ownedOn: "Wii U", year: 2002},
    {title: "Wind Waker", console: "Gamecube", ownedOn: "Gamecube", year: 2002},
    {title: "Twilight Princess", console: "Gamecube + Wii", ownedOn: "Wii", year: 2004},
    {title: "Skyward Sword", console: "Wii", ownedOn: "Wii", year: 2011},
    {title: "A Link Between Worlds", console: "Nintendo 3DS", ownedOn: "Nintendo 3DS", year: 2013},
    {title: "Breath of the Wild", console: "Wii U + Nintendo Switch", ownedOn: "Wii U + Nintendo Switch", year: 2017},

];

// loop to place each on page
for (let i = 0; i < zeldaGames.length; i++) {

    // html
    let itemDiv = document.createElement("div");
        itemDiv.innerHTML = `${zeldaGames[i].title} for the ${zeldaGames[i].console }<br> Released in ${zeldaGames[i].year} <br><br> Owned on ${zeldaGames[i].ownedOn}`;
        itemDiv.style.padding = "5px";
        itemDiv.style.marginBottom = "20px";  

    // if i own it on original console make it yellow, don't own it at all make it dark gray, and own it on not original console make it light grey
    if (zeldaGames[i].console == zeldaGames[i].ownedOn) {
        itemDiv.style.backgroundColor = "#f0e69e";

    } else if (zeldaGames[i].ownedOn == "None") {
        itemDiv.innerHTML = `${zeldaGames[i].title} for the ${zeldaGames[i].console }<br> Released in ${zeldaGames[i].year} <br><br> Not Owned`;
        itemDiv.style.backgroundColor = "#737373";

    } else {
        itemDiv.style.backgroundColor = "#c2c2c2";

    }

    //place on page after all is decided
    document.body.appendChild(itemDiv);
}

