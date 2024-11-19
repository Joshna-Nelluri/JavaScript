let btnEl = document.querySelector(".btn");
const cards = document.querySelectorAll('.card');
let okbtnEl = document.querySelector(".okBtn");
let cancelBtnEl = document.querySelector(".cancelBtn");
const alertBtn = document.querySelector(".alert");

function validateInput() {
    let inputValueEl = document.getElementById("input").value;
    let inp = document.getElementById("input");
    // let val = inp.value;
    let displayEl = document.getElementById("display");
    // let btnEl = document.getElementById("btn");
    // console.log(inputValueEl);

    const regex = /^[a-zA-Z!@#$_]{5}$/;
    // console.log(regex.test(inputValueEl)) ;
    if (!regex.test(inputValueEl)) {

        alert("Please enter alphabetics and special characters");
        inp.value = " ";
        cards.forEach(card => card.classList.remove('enabled'));

    } else {
        displayEl.innerHTML = inputValueEl;
        document.getElementById("popup").style.display = "none";
        cards.forEach(card => card.classList.add('enabled'));
        // console.log(displayEl.value);
    }

  
}

function reset() {

    // document.querySelector(".alert").style.display = "block";
    // if(okbtnEl.focus == true){
    matches = 0;
    turns = 0;
    document.getElementById("matches").innerText = matches;
    document.getElementById("turns").innerText = turns;
    cards.forEach(card => {
        // card.querySelector('img').style.display = "none";
        card.classList.remove('flipped')
        // img.src = images[index];
        // card.addEventListener('click', flipCard);
    });
    assignImages();
    // resetFlippedCards();
    hidePopup();

}


function showPopup() {
    document.querySelector(".alert").style.display = "block";
}

function hidePopup() {
    document.querySelector(".alert").style.display = "none";
}



okbtnEl.addEventListener("focus", reset);

// const cards = document.querySelectorAll('.card');
let flippedCards = [];
let turns = 0;
let matches = 0;

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        // console.log(a.length);
        const j = Math.floor(Math.random() * (i + 1));
        // console.log(j);
        [a[i], a[j]] = [a[j], a[i]];
    }
}

function assignImages() {
    const images = ['img1.jfif', 'img1.jfif', 'img2.jfif', 'img2.jfif', 'img3.jfif', 'img3.jfif'];
    shuffle(images);
    cards.forEach((card, index) => {
        const img = card.querySelector('img');
        img.src = images[index];
        card.addEventListener('click', flipCard);
    });
}

assignImages();

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            turns++;
            document.getElementById('turns').innerText = turns;
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const [first, second] = flippedCards;

    if (first.querySelector('img').src === second.querySelector('img').src) {
        matches++;
        document.getElementById('matches').innerText = matches;
        resetFlippedCards();
        if (matches == 3) {
            showPopup();
        }
    } else {
        setTimeout(() => {
            first.classList.remove('flipped');
            second.classList.remove('flipped');
            resetFlippedCards();
            // reset();
        }, 1000);
    }
}

function resetFlippedCards() {
    flippedCards = [];
}

// reset();
cancelBtnEl.addEventListener("click", hidePopup);
btnEl.addEventListener("click", validateInput);
// okbtnEl.addEventListener("click", reset);
