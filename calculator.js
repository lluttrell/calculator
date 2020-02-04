let displayValue = "";
let firstValue = 0;
let secondValue = 0;
let currentOperation = null;

updateScreen(displayValue);


document.getElementById("clearall").addEventListener('click', clearAll);

// add values to screen as user inputs numbers
document.getElementById("one").addEventListener('click', updateScreenValue.bind(null,"1"));
document.getElementById("two").addEventListener('click', updateScreenValue.bind(null,"2"));
document.getElementById("three").addEventListener('click', updateScreenValue.bind(null,"3"));
document.getElementById("four").addEventListener('click', updateScreenValue.bind(null,"4"));
document.getElementById("five").addEventListener('click', updateScreenValue.bind(null,"5"));
document.getElementById("six").addEventListener('click', updateScreenValue.bind(null,"6"));
document.getElementById("seven").addEventListener('click', updateScreenValue.bind(null,"7"));
document.getElementById("eight").addEventListener('click', updateScreenValue.bind(null,"8"));
document.getElementById("nine").addEventListener('click', updateScreenValue.bind(null,"9"));
document.getElementById("zero").addEventListener('click', updateScreenValue.bind(null,"0"));

// record first number and set operation flag
document.getElementById("plus").addEventListener('click', operationSelect.bind(null,"plus"));
document.getElementById("minus").addEventListener('click', operationSelect.bind(null,"minus"));
document.getElementById("multiply").addEventListener('click', operationSelect.bind(null,"multiply"));
document.getElementById("divide").addEventListener('click', operationSelect.bind(null,"divide"));

// display result if equal selected
document.getElementById("equals").addEventListener('click', performCalculation);

function performCalculation() {
    secondValue = parseInt(displayValue);
    switch (currentOperation) {
        case "plus":
            displayValue = firstValue + secondValue;
            break;
        case "minus":
            displayValue = firstValue - secondValue;
            break;
        case "multiply":
            displayValue = firstValue * secondValue;
            break;
        case "divide":
            displayValue = Math.floor((firstValue / secondValue)*1e8)/1e8;
            break;
        default:
            displayValue = firstValue;        
    }
    firstValue = displayValue;
    updateScreen(displayValue);
    console.log("foo");
}

function operationSelect(operation) {
    currentOperation = operation;
    firstValue = parseInt(displayValue);
    displayValue = "";
    updateScreen(displayValue);
}

function updateScreenValue(input) {
    if (displayValue.length <= 8) {
        displayValue += input;
        updateScreen(displayValue);
    }
}

function updateScreen(displayValue) {
    document.getElementById("calculator-screen").innerHTML = displayValue;
}

function clearAll() {
    firstValue = 0;
    secondValue = 0;
    displayValue = "";
    updateScreen(displayValue);
}