
const btn = document.getElementById("submit");

function selectedRadio() {
    const selected1 = document.querySelector('input[name="option1"]:checked');
    // console.log(selected1);
    const selected2 = document.querySelector('input[name="option2"]:checked');
    // console.log(selected2);
    
    const select1 = div1.querySelector('input[type="radio"]:checked') == null;
    const select2 = div2.querySelector('input[type="radio"]:checked') == null;

    if(select1 && select2){
        alert("please select any one of them");
        document.getElementById('result').innerHTML = `<p id="result"></p>`;
    }
    else{
    const value1 = selected1 ? selected1.value : '';
    const value2 = selected2 ? selected2.value : '';
    document.getElementById('result').innerHTML = `<p id = "result">Selected value: ${value1} ${value2}</p>`;
    }
}

btn.addEventListener("click", selectedRadio);