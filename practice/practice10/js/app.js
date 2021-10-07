let meeples = [];
let jobType = ["teacher", "doctor", "pilot"];

for(let i = 0; i < 20; i++) {
    meeples.push( {name: "Meeple #" + i, age: Math.floor(Math.random() * 50), job: "none"});

    // if age > 18 and dont have job randomly give job
    if (meeples[i].age > 18 && meeples[i].job == "none") {
        meeples[i].job = jobType[Math.floor(Math.random()*jobType.length)];
    }

    if (meeples[i].age > 55 && (Math.random() * 2) > 1) {
        meeples[i].pop
    }
}

// when a button is pressed, loop through meeples and add 1 to their age
function addAge() {
    for (let x = 0; x < meeples.length; x++) {
        // meeples[x].age = meeples[x].age + 1;
        meeples[x].age++;   
        console.log(meeples[x].age);
    }

    // console.log(meeples.age);

}

let ageButton = document.createElement("div");
ageButton.setAttribute("onclick", "addAge()");
ageButton.style.width = "60px";
ageButton.style.height = "40px";
ageButton.style.backgroundColor = "#ff0000"
document.body.appendChild(ageButton);

console.log(meeples);
