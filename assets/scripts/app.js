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

function calculateREsult(calculationType) {
    const entereNumber = getUserNumberInput();
    const initalResult = currentResult;

    if (calculationType === 'ADD') {
        currentResult += entereNumber;
    } else {

    }
}

function add() {
    const entereNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult += entereNumber;
    createAndWriteLog('+', initalResult, entereNumber);
    writeToLog('ADD', initalResult, entereNumber, currentResult);

}

function subtrct() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteLog('-', initalResult, enteredNumber);
    writeToLog('SUBTRACT', initalResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteLog('*', initalResult, enteredNumber);
    writeToLog('MULTIPLY', initalResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteLog('/', initalResult, enteredNumber);
    writeToLog('DIVIDE', initalResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtrct);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);