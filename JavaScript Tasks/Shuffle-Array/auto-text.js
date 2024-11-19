const containerEl = document.querySelector(".container");
const arr = ["Youtuber", "Web Developer", "Tester", "Instructor"];

let arrIndex = 0;
let characterIndex = 0;
updateText();

function updateText() {
    characterIndex++;
     
     containerEl.innerHTML = 
      `<h1>I am ${arr[arrIndex].slice(0,1) == "A"  || arr[arrIndex].slice(0,1) == "E" || arr[arrIndex].slice(0,1) == "I" || 
      arr[arrIndex].slice(0,1) == "O" || arr[arrIndex].slice(0,1) == "U"  ? "an" : "a"}
      ${arr[arrIndex].slice(0, characterIndex)}</h1>`;

    //   console.log(arr[arrIndex].slice(0, 1));

    if (characterIndex == arr[arrIndex].length) {
        // arrIndex++;
        arrIndex = randomArr();
        characterIndex = 0;
    } 

    // if (arrIndex == arr.length) {
    //     arrIndex = 0;
    // }

    setTimeout(updateText, 300);
}

function randomArr(){
   /* for(let i=array.length-1; i>0; i--){ } */
    let j = Math.floor(Math.random() * 4);
    console.log(arr[j]);
    return j;  
}

/* 
let shuffle = randomArr(arr);
for(let i = 0; i < shuffle.length; i++)
{
    if(updateText(shuffle[i])){
        containerEl.innerHTML += `<h1>${arr[arrIndex].slice(0, characterIndex)}</h1>` ;
    }
    
} */