// player object
// enemy object

// update player & enemy HTML
// function to allow the player to attack and the enemy to attack back + update display
// create player div
// create enemy div
// create attack button


// player object
let player = {
    hp: 30,
    attack: 15,
    defense: 10
}

// enemy object
let enemy = {
    hp: 20,
    attack: 12,
    defense: 5,
}

// creates all divs
let enemyDiv = document.createElement("div");
let attackButton = document.createElement("div");
let playerDiv = document.createElement("div");
let respawnButton = document.createElement("div");


// 
// --PLAYER & ENEMY DIVS / UPDATE FUNCTION
// 

// updates 
function update() {
    playerDiv.innerHTML = "PLAYER <br> HP: " + player.hp + "<br> Attack: " + player.attack + "<br> Defense: " + player.defense;

    enemyDiv.innerHTML = "ENEMY <br> HP: " + enemy.hp + "<br> Attack: " + enemy.attack + "<br> Defense: " + enemy.defense;
}

// extra enemy HTML
enemyDiv.style.marginTop = "40px"


// 
// --ATTACK BUTTON
//

// function to allow the player to attack and the enemy to attack back + update display
function attackCycle() {
    if (player.attack > enemy.defense) {
        enemy.hp = enemy.hp - (player.attack - enemy.defense);
    }
    

    if (enemy.hp <= 0) {
        enemyDiv.innerHTML = ("Defeated!");

    } else {

        if (enemy.attack > player.defense) {
            player.hp = player.hp - (enemy.attack - player.defense);
        }
        
        update();
    }

    if (player.hp <= 0) {
        playerDiv.innerHTML = ("You Died!");

        attackButton.style.display = "none";
    } 
}

// attack button styling
attackButton.innerHTML = "Attack";
attackButton.style.height = "20px";
attackButton.style.width = "60px";
attackButton.style.textAlign = "center";
attackButton.style.marginTop = "10px"
attackButton.style.backgroundColor = "#ff0000";
attackButton.setAttribute("onclick", "attackCycle()");


//
// --RESPAWN BUTTON
//

// respawns player and generates new enemy
function respawn() {
    player.hp = 30;
    playerDiv.innerHTML = "PLAYER <br> HP: " + player.hp + "<br> Attack: " + player.attack + "<br> Defense: " + player.defense;

    enemy.hp = Math.floor(Math.random(1) * 50);
    enemy.attack = Math.floor(Math.random(1) * 20);
    enemy.defense = Math.floor(Math.random(1) * 15);
    enemyDiv.innerHTML = "ENEMY <br> HP: " + enemy.hp + "<br> Attack: " + enemy.attack + "<br> Defense: " + enemy.defense;

    attackButton.style.display = "block";
}

// repspawn button styling
respawnButton.innerHTML = "Respawn";
respawnButton.style.height = "20px";
respawnButton.style.width = "100px";
respawnButton.style.textAlign = "center";
respawnButton.style.marginBottom = "50px"
respawnButton.style.backgroundColor = "#ff00ff";
respawnButton.setAttribute("onclick", "respawn()");


// 
// -- SENDING TO HTML
// 

// display HTML
update();

// places everything on page
document.body.appendChild(respawnButton);
document.body.appendChild(playerDiv);
document.body.appendChild(attackButton);
document.body.appendChild(enemyDiv);



