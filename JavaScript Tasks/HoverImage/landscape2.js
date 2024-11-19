const leftEl = document.querySelector(".left");

const img1El = document.querySelector(".img1");
const img2El = document.querySelector(".img2");
const img3El = document.querySelector(".img3");

img1El.addEventListener("mouseover", () =>{
    leftEl.classList.add("active-img1")
    // img1El.style.backgroundImage.src = "https://images.unsplash.com/photo-1726121678240-9126d5017990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D";
});

img1El.addEventListener("mouseleave", () => {
    leftEl.classList.remove("active-img1")
});

img2El.addEventListener("mouseover", () => {
    leftEl.classList.add("active-img2")
});

img2El.addEventListener("mouseleave", () => {
    leftEl.classList.remove("active-img2")
});

img3El.addEventListener("mouseover", () => {
    leftEl.classList.add("active-img3")
});

img3El.addEventListener("mouseleave", () => {
    leftEl.classList.remove("active-img3")
});