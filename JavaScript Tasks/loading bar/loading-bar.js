const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");
const playEl = document.getElementById("play");
const resetEl = document.getElementById("reset");

let index = 0;
let play = false;
let interval;
function updateNum(){
    // counterEl.innerText = index + "%";
    // barEl.style.width = index + "%";
    // index++;
    if(index >= 99){
        // setTimeout(updateNum, 30)
        clearInterval(interval);
        index = 99;
    }
    index++;
    counterEl.innerText = index + "%";
    barEl.style.width = index + "%";
}

playEl.addEventListener("click", ()=> {
    if(play  == false){
        playEl.src = "https://cdn0.iconfinder.com/data/icons/zondicons/20/play-64.png";
        play = true;
        interval = setInterval(updateNum, 100);
    }
    else{
        playEl.src = "https://cdn2.iconfinder.com/data/icons/multimedia-26/24/multimedia-52-64.png";
        play = false;
        clearInterval(interval);
    }
});

resetEl.addEventListener("click", () => {
    clearInterval(interval);
    index = -1;
    updateNum();
});




// updateNum();