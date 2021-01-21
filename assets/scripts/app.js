/*jshint esversion: 6 */

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


// gets inputs from input filed
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    if (calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
    ) {
        return;
    }

    const entereNumber = getUserNumberInput();
    const initalResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += entereNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= entereNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= entereNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= entereNumber;
        mathOperator = '/';
    }

    createAndWriteLog(mathOperator, initalResult, entereNumber);
    writeToLog(calculationType, initalResult, entereNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtrct() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtrct);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);