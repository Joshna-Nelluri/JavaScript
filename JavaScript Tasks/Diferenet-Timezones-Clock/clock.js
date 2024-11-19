const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");


function updateClock(){
    // console.log(currentDate);
    const currentDate = new Date();
   // setTimeout(updateClock, 1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds(); 
   
    const hourDeg = (hour / 12) * 360;
    // console.log(hourDeg); 
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = (minute / 60) * 360;
    // console.log(minuteDeg);
    
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = (second / 60) * 360;
    // console.log(secondDeg);
    
   
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}


//updateClock();

const hourEl1 = document.querySelector(".hour1");
const minuteEl1 = document.querySelector(".minute1");
const secondEl1 = document.querySelector(".second1");

function updateClockEn(){
    const currentDate = new Date();
    
    const hour1 = currentDate.getHours();
    const minute1 = currentDate.getMinutes();
    const second1 = currentDate.getSeconds();
    
    const hour1Deg = ((hour1 - 4) / 12) * 360;
    // console.log(hour1Deg);
    hourEl1.style.transform = `rotate(${hour1Deg}deg)`;
    const minute1Deg = ((minute1 - 30) / 12) * 360;
    minuteEl1.style.transform = `rotate(${minute1Deg}deg)`;
    // console.log(minute1Deg);
    const second1Deg = (second1 / 60) * 360;
    secondEl1.style.transform = `rotate(${second1Deg}deg)`;
    // console.log(second1Deg);

    // const hour1 = englandTime.getHours();
    // console.log(hour1);
}


const hourEl2 = document.querySelector(".hour2");
const minuteEl2 = document.querySelector(".minute2");
const secondEl2 = document.querySelector(".second2");


function updateClockUs(){

    // console.log(currentDate);
    const currentDate = new Date();
   // setTimeout(updateClock, 1000);
    const hour2 = currentDate.getHours();
    const minute2 = currentDate.getMinutes();
    const second2 = currentDate.getSeconds(); 
   
    const hour2Deg = ((hour2 - 10)/ 12) * 360;
    // console.log(hourDeg1); 
    hourEl2.style.transform = `rotate(${hour2Deg}deg)`;
    const minute2Deg = ((minute2 - 30) / 60) * 360;
    // console.log(minuteDeg1);  
    minuteEl2.style.transform = `rotate(${minute2Deg}deg)`;
    const second2Deg = (second2 / 60) * 360;
    // console.log(secondDeg1);
    secondEl2.style.transform = `rotate(${second2Deg}deg)`;
}

setInterval(updateClock, 1000);
setInterval(updateClockEn, 1000);
setInterval(updateClockUs, 1000);
