// const bgImageEl = document.getElementById("bg-image");
const containerEl = document.querySelector(".container");
const containerE2 = document.querySelector(".container1");
const leftEl =document.querySelector(".left");
const rightEl =document.querySelector(".right");


leftEl.addEventListener("scrollY", () => {
    containerEl.classList.add("active-left")
});

leftEl.addEventListener("", () => {
    containerEl.classList.remove("active-left")
});

rightEl.addEventListener("scrollY", () => {
    containerEl.classList.add("active-right");
   
});

rightEl.addEventListener("", () => {
    containerEl.classList.remove("active-right")
});

window.addEventListener("scroll", () => {
    updateImage();
    updateRightImage();
});

function updateImage(){
    
    // leftEl.style.backgroundSize = 160 - window.scrollY / 5 + "%";
    leftEl.style.width = 50 - window.scrollY / 50 + "%";
}
 
 function updateRightImage(){
    // rightEl.style.backgroundSize = 160 - window.scrollY / 100 + "%";
    rightEl.style.width = 50 - window.scrollY / -2 + "%";
 }  