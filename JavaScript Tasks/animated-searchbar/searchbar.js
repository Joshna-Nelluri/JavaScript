const searchBarContainerE1 = document.querySelector(".search-bar-container");
const bodyE2 = document.querySelector("body");
const magnifierEl = document.querySelector(".magnifier");
const searchEl = document.querySelector(".input");

magnifierEl.addEventListener("click", () => {
    searchBarContainerE1.classList.toggle("active");
});

searchEl.addEventListener("focus", () => {
    searchBarContainerE1.classList.add("active2")
});

searchEl.addEventListener("blur", () => {
    searchBarContainerE1.classList.remove("active2")
});

// bodyEl.addEventListener("focus", () => {
//     searchBarContainerE1.classList.add("active3")
// });






