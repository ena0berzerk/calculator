let operator;
let firstOperand;
let secondOperand;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, leftNum, rightNum) {
  return operator(leftNum, rightNum);
}

console.log(operate(subtract, 5, 2));
