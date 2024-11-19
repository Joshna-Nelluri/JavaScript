let amountInvestedEl = document.getElementById("amount");
let rateOfReturnEl = document.getElementById("interest");
let timeEl = document.getElementById("years");
let range1El = document.querySelector(".monthlyInvRange");
let range2El = document.querySelector(".expReturnRange");
let range3El = document.querySelector(".monthsToPayRange");
let progressCircleEl = document.getElementById("progress");
const progressTextEl = document.querySelector(".progress-text");




function updateProgress(percentage) {
    const progress = (440 * (100 - percentage)) / 100;
    // console.log(progress);
    progressCircleEl.style.strokeDashoffset = progress;
    
}

function calculateSIP() {
   
    let monthlyRate = range2El.value / 12 / 100;
    let months = range3El.value * 12;
    let futureValue = 0;
    futureValue = range1El.value * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate * (1 + monthlyRate);
    let amountTotalInvested = range1El.value * months;
    let estReturns = Math.round(futureValue > 0 ? futureValue : 0) - amountTotalInvested;

    // let total = amountInvestedEl.value * timeEl.value * 12;
    let returns = futureValue - amountTotalInvested;
    let percentage = returns > 0 ? (returns / futureValue) * 100 : 0;
    // let percentage = (returns / futureValue) * 100;
    // console.log(percentage);
    updateProgress(Math.max(percentage, 0));
    // updateProgress(percentage);
    document.getElementById("invested-amt").innerHTML = `${'<img src="https://cdn4.iconfinder.com/data/icons/tabler-vol-3/24/currency-rupee-64.png" class="rupee">'} ${amountTotalInvested} `;
    document.getElementById("est-returns").innerHTML = `${'<img src="https://cdn4.iconfinder.com/data/icons/tabler-vol-3/24/currency-rupee-64.png" class="rupee">'} ${estReturns}`;
    document.getElementById("total-value").innerHTML = `${'<img src="https://cdn4.iconfinder.com/data/icons/tabler-vol-3/24/currency-rupee-64.png" class="rupee">'} ${Math.round(futureValue > 0 ? futureValue : 0)}`;
    // animateProgress(Math.max(percentage, 0));
}



amountInvestedEl.addEventListener("input", function() {
    range1El.value = amountInvestedEl.value;
    calculateSIP();
    // updateProgress(Math.max(percentage, 0));
});

range1El.addEventListener("input", function() {
    amountInvestedEl.value = range1El.value;
    calculateSIP();
    // updateProgress(Math.max(percentage, 0));
});


rateOfReturnEl.addEventListener("input", function() {
    range2El.value = rateOfReturnEl.value;
    calculateSIP();
    // updateProgress(Math.max(percentage, 0));
});

range2El.addEventListener("input", function() {
    rateOfReturnEl.value = range2El.value;
    calculateSIP();
    // updateProgress(Math.max(percentage, 0));
});
// rateOfReturnEl.value = range2El.value;



timeEl.addEventListener("input", function() {
    range3El.value = timeEl.value;
    calculateSIP();
    // updateProgress(Math.max(percentage, 0));
});

range3El.addEventListener("input", function() {
    timeEl.value = range3El.value;
    calculateSIP();
    // updateProgress(Math.max(percentage, 0));
}); 



function reset() {
    if (matches === 3) {
        const resetConfirmed = confirm("Do you want to reset the game?");
        if (resetConfirmed) {
            matches = 0;
            turns = 0;
            document.getElementById('matches').innerText = matches;
            document.getElementById('turns').innerText = turns;
            assignImages(); 
            resetFlippedCards();
        }
    }
}




 
