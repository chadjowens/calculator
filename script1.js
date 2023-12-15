
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys') 
const display = calculator.querySelector('.calculator__display')

keys.addEventListener('click', e => {
    if (!e.target.closest('button')) return;

    const key = e.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const type = key.dataset.type;
    const previousKeyType = calculator.dataset.previousKeyType;


    // Is this a number key?
    if (type === 'number') {
        console.log('number key!');
        if (displayValue === '0') {
            display.textContent = keyValue;
        } else if (previousKeyType === 'operator') {
            display.textContent = keyValue;
        } else {
            display.textContent = displayValue + keyValue;
        } 
       
    }

    //Is this an operator key?
    if (type === 'operator') {
        const operatorKeys = keys.querySelectorAll('[data-key-type="operator"]');
        operatorKeys.forEach(el => {el.dataset.state = ''});

        key.dataset.state = 'selected';

        calculator.dataset.firstValue = displayValue;
        calculator.dataset.operator = key.dataset.key;
    }   

    if (type === 'equal') {
        // Perform a calculation
        const secondValue = displayValue;
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;

        console.log(firstValue, operator, secondValue);

        display.textContent = calculate(firstValue, operator, secondValue);

        // display.textContent = calculate(firstValue, operator, secondValue);
    }
    calculator.dataset.previousKeyType = type;
});

function calculate(firstValue, operator, secondValue) {
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);

    let result = '';
    if (operator === 'plus') result = firstValue + secondValue;
    if (operator === 'minus') result = firstValue - secondValue;
    if (operator === 'times') result = firstValue * secondValue;
    if (operator === 'divide') result = firstValue / secondValue;
    return result;
}



// function display(value) {: This line declares a function named display that takes one parameter, value. This value is what you want to append to the current value of the result element.

// document.getElementById('result').value += value;: This line does the actual work of appending the value to the result element. document.getElementById('result') gets a reference to the HTML element with the id result. The .value property gets or sets the value of the input element. The += operator appends the value to the current value of the input element.

// In a typical use case, such as a calculator app, the display function might be called when a button is clicked, passing the button's value to the function to be displayed in the result element.

// function display(value) {
//     document.getElementById('result').value += value;
//   }

//   function add(x, y) {
//     return x + y;
//   }
  
//   function subtract(x, y) {
//     return x - y;
//   }
  
//   function multiply(x, y) {
//     return x * y;
//   }
  
//   function divide(x, y) {
//     if (y === 0) {
//       return "Error: Division by zero!";
//     }
//     return x / y;
//   }

//   function clearDisplay() {
//     document.getElementById('result').value = "";
//   }
  
//  function calculate() {: This line declares a function named calculate. This function doesn't take any parameters.
//  try {: This line starts a try block. The code inside this block is executed normally. If any errors occur while executing this code, instead of stopping the execution, the program will jump to the catch block.
//  let result = eval(expression);: This line uses the eval function to evaluate the expression. The eval function takes a string argument and evaluates it as JavaScript code. In this case, it's used to evaluate the mathematical expression.

// function calculate() {
//     try {
//       let expression = document.getElementById('result').value;
//       let result = eval(expression);
//       display(" = " + result);
//     } catch (error) {
//       display("Error: Invalid expression!");
//     }
//   }
  
//   function handleOperator(operator) {
//     // let currentExpression = document.getElementById('result').value;
//     switch (operator) {
//       case '+':
//         display(' + ');
//         break;
//       case '-':
//         display(' - ');
//         break;
//       case '*':
//         display(' * ');
//         break;
//       case '/':
//         display(' / ');
//         break;
//       default:
//         break;
//     }
//   }
