const defaultResult = 0;
let currentResult = defaultResult;

// gets inputs from input filed
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

// 
function add() {
    const entereNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult += entereNumber;
    createAndWriteLog('+', initalResult, entereNumber);
}

function subtrct() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteLog('-', initalResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteLog('*', initalResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteLog('/', initalResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtrct);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);