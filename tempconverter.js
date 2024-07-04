let buttonClick = document.getElementById("converter-btn");

let elConvert = function() {
    let celsiusValue = parseFloat(document.getElementById("celsius-box").value);
    let fahrenheitValue = parseFloat(document.getElementById("fahrenheit-box").value);
    
    if (!isNaN(celsiusValue)) {
        let cToF = (celsiusValue * 9 / 5) + 32;
        document.getElementById("fahrenheit-box").value = cToF.toFixed(2);
    } else if (!isNaN(fahrenheitValue)) {
        let fToC = (fahrenheitValue - 32) * 5/9;
        document.getElementById("celsius-box").value =fToC.toFixed(2);
    } else {
        alert ("Enter a valid number first.")
    }
}

buttonClick.addEventListener('click', elConvert);

let elClear = document.getElementById("clear-btn"); 

function elClearBtn() {
    document.getElementById("celsius-box").value = "";
    document.getElementById("fahrenheit-box").value = "";
}

elClear.addEventListener('click' , elClearBtn);