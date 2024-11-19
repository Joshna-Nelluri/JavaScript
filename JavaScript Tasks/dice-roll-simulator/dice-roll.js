const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
const resetEl = document.getElementById("reset");

let historyList = [];
let rollcount = 0;

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    rollcount++;
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

if(historyList.length == 0){
    rollHistoryEl.innerHTML = "No previous rolls";
} 

function updateRollHistory() {
    rollHistoryEl.innerHTML = "";
   
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
    
        listItem.innerHTML = `<p class="roll-number"> Roll ${i + 1}: </p><span> ${getDiceFace(historyList[i])} 
        </span> 
        <button class="closeButton">X</button>`;
        rollHistoryEl.appendChild(listItem);
        const closeButton = listItem.querySelector('.closeButton');
        closeButton.addEventListener("click", function(){
            removeRoll(listItem);
        });
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default: return "";
    }
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});

resetEl.addEventListener("click", () => {
    rollHistoryEl.innerText = " ";
    historyList = [];
    // updateRollHistory();
});

function removeRoll(listItem){ 
    listItem.remove();
    // updateRollHistory();
    updateRoll();
} 

function updateRoll(){
    let rolls = document.querySelectorAll("li");  
    rolls.forEach((listItem, index) => {
        listItem.querySelector('.roll-number').innerText = `Roll ${index+1}:`      
    });  
}


