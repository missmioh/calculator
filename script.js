let firstOperand;
let secondOperand;
let operator;

// checks if the first variable is complete so no new numbers will be added (!12+2 = 122)
let resultTracker;

// the math

function operate(operator, a, b) {
    if (operator === "+") return addition(a, b);
    if (operator === "-") return subtraction(a, b);
    if (operator === "*") return multiplication(a, b);
    if (operator === "/") return division(a, b);
};


function addition(a, b) {
    return a + b;
};

function subtraction(a, b) {
    return a - b;
};

function multiplication(a, b) {
    return a * b;
};

function division(a, b) {
    return a / b;
};

// click events

const digitBtns = document.querySelectorAll(".digitBtn");
const display = document.querySelector("p");

digitBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        // stores first operand
        if (!firstOperand) {
            firstOperand = parseInt(e.target.id);
            display.textContent = e.target.id;
        // resets calculator if no new operator is chosen after result
        } else if (resultTracker && !operator) {
            clearAllVariables();
            firstOperand = parseInt(e.target.id);
            display.textContent = e.target.id;
        // removes tracker so business can go an as usual
        } else if (resultTracker && operator) {
            resultTracker = "";
            secondOperand = parseInt(e.target.id);
            display.textContent = firstOperand + operator + secondOperand;
        // for when the firstOperand is multi-digit
        } else if (firstOperand && !operator) {
            firstOperand = parseInt(firstOperand + e.target.id);
            display.textContent = firstOperand;
        // when entering the secondOperand after an operator
        } else if (firstOperand && operator && !secondOperand) {
            secondOperand = parseInt(e.target.id);
            display.textContent = firstOperand + operator + secondOperand;
        // for multi-digit secondOperand
        } else if (firstOperand && operator && secondOperand) {
            secondOperand = parseInt(secondOperand + e.target.id);
            display.textContent = firstOperand + operator + secondOperand;
        }
    });
});

const operatorBtns = document.querySelectorAll(".operatorBtn");

operatorBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.id !== "=") {
            if (firstOperand && secondOperand && operator) {
                firstOperand = operate(operator, firstOperand, secondOperand);
                secondOperand = "";
                operator = e.target.id;
                display.textContent = firstOperand + operator;
                resultTracker = true;
            } else {
            operator = e.target.id;
            display.textContent = firstOperand + operator;
            }
        };

        if (e.target.id === "=") {
            if ( operator === "/" && secondOperand === 0 || !secondOperand ) {
                display.textContent = "Are you trying to crash the universe?";
                clearAllVariables();
            } else if (operator && secondOperand !== 0) {
                firstOperand = operate(operator, firstOperand, secondOperand);
                secondOperand = "";
                operator = "";
                display.textContent = firstOperand;
                resultTracker = true;
            }
        }
    });
});

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", function() {
     display.textContent = "";
     clearAllVariables();
});

function clearAllVariables() {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    resultTracker = "";
} 