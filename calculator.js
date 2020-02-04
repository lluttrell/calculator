let displayValue = "5138008";
let firstValue = 0;
let secondValue = 0;

updateScreen(displayValue);

document.getElementById("clear").addEventListener('click', clearAll);
document.getElementById("one").addEventListener('click', updateScreenValue.bind(null,"1"));
document.getElementById("two").addEventListener('click', updateScreenValue.bind(null,"2"));
document.getElementById("three").addEventListener('click', updateScreenValue.bind(null,"3"));
document.getElementById("four").addEventListener('click', updateScreenValue.bind(null,"4"));
document.getElementById("five").addEventListener('click', updateScreenValue.bind(null,"5"));
document.getElementById("six").addEventListener('click', updateScreenValue.bind(null,"6"));
document.getElementById("seven").addEventListener('click', updateScreenValue.bind(null,"7"));
document.getElementById("eight").addEventListener('click', updateScreenValue.bind(null,"8"));
document.getElementById("nine").addEventListener('click', updateScreenValue.bind(null,"9"));

function updateScreenValue(input) {
    displayValue += input;
    updateScreen(displayValue);
}

function updateScreen(displayValue) {
    document.getElementById("calculator-screen").innerHTML = displayValue;
}

function clearAll() {
    firstValue = 0;
    secondValue = 0;
    displayValue = "";
    updateScreen(displayValue);
    console.log("cleared");
}