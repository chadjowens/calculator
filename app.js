
// function display(value) {: This line declares a function named display that takes one parameter, value. This value is what you want to append to the current value of the result element.

// document.getElementById('result').value += value;: This line does the actual work of appending the value to the result element. document.getElementById('result') gets a reference to the HTML element with the id result. The .value property gets or sets the value of the input element. The += operator appends the value to the current value of the input element.

// In a typical use case, such as a calculator app, the display function might be called when a button is clicked, passing the button's value to the function to be displayed in the result element.

function display(value) {
    document.getElementById('result').value += value;
  }

  function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function divide(x, y) {
    if (y === 0) {
      return "Error: Division by zero!";
    }
    return x / y;
  }

  function clearDisplay() {
    document.getElementById('result').value = "";
  }
  
//  function calculate() {: This line declares a function named calculate. This function doesn't take any parameters.
//  try {: This line starts a try block. The code inside this block is executed normally. If any errors occur while executing this code, instead of stopping the execution, the program will jump to the catch block.
//  let result = eval(expression);: This line uses the eval function to evaluate the expression. The eval function takes a string argument and evaluates it as JavaScript code. In this case, it's used to evaluate the mathematical expression.

function calculate() {
    try {
      let expression = document.getElementById('result').value;
      let result = eval(expression);
      display(" = " + result);
    } catch (error) {
      display("Error: Invalid expression!");
    }
  }
  
  function handleOperator(operator) {
    // let currentExpression = document.getElementById('result').value;
    switch (operator) {
      case '+':
        display(' + ');
        break;
      case '-':
        display(' - ');
        break;
      case '*':
        display(' * ');
        break;
      case '/':
        display(' / ');
        break;
      default:
        break;
    }
  }
