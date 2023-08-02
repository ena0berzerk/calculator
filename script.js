let operator = '';
let firstOperand = '';
let secondOperand = '';
let displayValue = '';
let result = '';

// DOM nodes
const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const keypad = calculator.querySelector('.keypad');
const keys = keypad.querySelectorAll('.keys-btns');
const plusBtn = keypad.querySelector('#plus');
const minusBtn = keypad.querySelector('#minus');
const multiplyBtn = keypad.querySelector('#multiply');
const divideBtn = keypad.querySelector('#divide');
const equalBtn = keypad.querySelector('#equal');
const clear = keypad.querySelector('#clear');

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
  if (b === 0) {
    return alert(`You cant't divide by 0`);
  } else return a / b;
}

function operate(operatorChoose, numOne, numTwo) {
  return operatorChoose(numOne, numTwo);
}

function populateValueOnDisplay() {
  keys.forEach(item => {
    item.addEventListener('click', e => {
      if (display.textContent.length < 13 && e.target.value) {
        let populate = display.textContent.startsWith('0')
          ? (display.textContent = e.target.value)
          : (display.textContent += e.target.value);
        displayValue = +populate;
        console.log(displayValue);
      }
    });
  });
}
populateValueOnDisplay();

plusBtn.addEventListener('click', () => {
  firstOperand = displayValue;
  display.textContent = 0;
  operator = add;
});

minusBtn.addEventListener('click', () => {
  firstOperand = displayValue;
  display.textContent = 0;
  operator = subtract;
});

multiplyBtn.addEventListener('click', () => {
  firstOperand = displayValue;
  display.textContent = 0;
  operator = multiply;
});

divideBtn.addEventListener('click', () => {
  firstOperand = displayValue;
  display.textContent = 0;
  operator = divide;
});

clear.addEventListener('click', () => {
  displayValue = 0;
  display.textContent = 0;
  operator = '';
  firstOperand = '';
  secondOperand = '';
});

equalBtn.addEventListener('click', () => {
  if (firstOperand || secondOperand) {
    secondOperand = displayValue;
    displayValue = +operate(operator, firstOperand, secondOperand);
    console.log('it res', displayValue);
    display.textContent = displayValue;
    if (display.textContent.length > 14) {
      display.textContent = 'NaN';
    }
  } else return console.log('error');
});
