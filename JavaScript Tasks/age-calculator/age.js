const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result")

function calculateAge(){
    
    const birthdayValue = birthdayEl.value;
    const current = new Date();
    const year = current.getFullYear();
    const birthday = new Date(birthdayValue);
    let month = current.getMonth() - birthday.getMonth();
 

    const b = new Date(birthdayValue).getTime();
    const now = new Date().getTime();
   
    let g = now - b;

    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;

    const d1 = Math.floor(g/d);
    // console.log(d1);
    
    const h1 = Math.floor((g % d)/ h);
    // console.log(h1);
    const m1 = Math.floor((g % h)/ m);
    //  console.log(m1)
    const s1 = Math.floor((g % m)/ s);
    // console.log(s1)
    
   let updateMonth;
    if(current.getMonth() < birthday.getMonth()){
         updateMonth = birthday.getMonth() - current.getMonth();
    }
    else{
        updateMonth = current.getMonth() - birthday.getMonth();
    }
    
    if(birthdayValue == ""){
        alert("Please enter your birthday");
    }
    else if (year < birthday.getFullYear()) {

        alert("Please enter your birth date less than the current one");
    } 
    else{
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} ${updateMonth} ${updateMonth > 1 ? "months" : "month"} ${d1} ${d1 > 1 ? "days" : "day"} ;
        ${h1} ${h1 > 1 ? "hours" : "hour"} ${m1} ${m1 > 1 ? "minutes" : "minute"} ${s1} ${s1 > 1 ? "seconds" : "second"} old`
    }
    setInterval(calculateAge, 1000);
}

// function updateTime(){
   
//     setInterval(calculateAge, 1000);
// }


function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month == 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }
    return age;
}

btnEl.addEventListener("click", calculateAge);

