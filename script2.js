console.log('hello');

let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener('DOMContentLoaded', function() {
    // Store all components on HTML in our JS
    let clear = document.querySelector('#clear-btn');
    let equal = document.querySelector('.equal');
    let decimal = document.querySelector('.decimal');

    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    numbers.forEach((number) => number.addEventListener('click', function(e) {
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }));

    operators.forEach((op) => op.addEventListener('click', function(e) {
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }));

    clear.addEventListener('click', function() {
        currentValue = "";
        previousValue = "";
        operator = "";
        previousScreen.textContent = "";
        currentScreen.textContent = "";
    });

    equal.addEventListener('click', function() {
        if (currentValue != "" && previousValue != "") {
            calculate();
            previousScreen.textContent = "";
            if (previousValue <= 5) {    
                currentScreen.textContent = previousValue;
            } else {
                currentScreen.textContent = previousValue.slice(0, 5) + "...";
            }
        } else {
            currentScreen.textContent = "Error";
        }
    });

    decimal.addEventListener('click', function() {
        if (currentValue.length <= 5) {
            addDecimal();
        }
    });

});

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue = currentValue + num;
    }
};

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = "";
};

function calculate() {
currentValue = Number(currentValue);
previousValue = Number(previousValue);

    if (operator == "+") {
        currentValue = previousValue + currentValue;
    } else if (operator == "-") {
        currentValue = previousValue - currentValue;
    } else if (operator == "*") {
        currentValue = previousValue * currentValue;
    } else if (operator == "/") {
        currentValue = previousValue / currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
    currentValue = "";
    // console.log(currentValue);
}

function roundNumber() {
    return Math.round(currentValue * 1000) / 1000;
}

function addDecimal() {
    if (!currentValue.includes(".")) {
        currentValue = currentValue + ".";
    }
}