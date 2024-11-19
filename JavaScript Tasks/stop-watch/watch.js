let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timeEl = document.querySelector(".clock");
const startEl = document.getElementById("start");
const splitEl = document.getElementById("split");
const resetEl = document.getElementById("reset");
const splitTextEl = document.getElementById("split-text");
const historyEl = document.querySelector(".history");


let timer = null;
timeEl.style.fontSize = "50px";
let count = 0;

let h;
let m;
let s;
let ms;
function displayTime() {
    milliseconds += 1;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++
            }
        }
    }
    h = hours < 10 ? "0" + hours : hours;
    m = minutes < 10 ? "0" + minutes : minutes;
    s = seconds < 10 ? "0" + seconds : seconds;
    ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timeEl.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}


function start() {
    if (timer !== null) {
        // startEl.innerText = "Pause";
        // timer = setInterval(displayTime, 10);
        // timer = true;
        clearInterval(timer);
        startEl.innerText = "Start";
        timer = null;
        splitEl.disabled = true;
        resetEl.disabled = false;
        // startEl.innerText = "Pause";
    }
    else {
        // startEl.innerText = "Pause";
        // timer = null;
        startEl.innerText = "Pause";
        timer = setInterval(displayTime, 1);
        splitEl.disabled = false;
        resetEl.disabled = true;
        // clearInterval(timer);
    }
}

function reset() {
    alert("Do you want to reset the timer?");
    clearInterval(timer);
    timer = null;
    timeEl.textContent = "00:00:00:000";
    // [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    splitEl.disabled = true;
    resetEl.disabled = true;
    // splitTextEl.textContent = " ";
    splitTextEl.innerHTML = "";
    count = 0;
}

function split() {
    if (timer !== null) {
        count++;
    
        const li = document.createElement("li");
        li.innerHTML = `<p class="number">#${count}</p> ${" "} ${h} : ${m} : ${s} : ${ms} <button class="closeBtn">X</button>`;
        splitTextEl.appendChild(li);

        li.querySelector('.closeBtn').addEventListener("click", function() {
            removeSplit(li);
        })
    }

}

function removeSplit(li){
    li.remove();
    updateSplites();
}


function updateSplites(){
    let items = document.querySelectorAll("li");
    items.forEach((li, index) => {
        li.querySelector('.number').innerText = `${index+1}:`
    });
}

startEl.addEventListener("click", start);


resetEl.addEventListener("click", reset);

splitEl.addEventListener("click", split);

