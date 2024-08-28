// script.js

let resultDisplay = document.getElementById('result');

function appendNumber(number) {
    resultDisplay.value += number;
}

function appendOperator(operator) {
    if (resultDisplay.value !== '') {
        resultDisplay.value += operator;
    }
}

function clearDisplay() {
    resultDisplay.value = '';
}

function deleteLast() {
    resultDisplay.value = resultDisplay.value.slice(0, -1);
}

function calculate() {
    try {
        resultDisplay.value = eval(resultDisplay.value);
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}