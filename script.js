let firstOperand;
let secondOperand;
let operator;

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
        firstOperand = parseInt(e.target.id);
        display.textContent = e.target.id;
    });
});

const operatorBtns = document.querySelectorAll(".operatorBtn");

operatorBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.id !== "=") {
            operator = e.target.id;
            display.textContent = firstOperand + e.target.id;
        };

        if (e.target.id === "=") {
            display.textContent = operate(operator, firstOperand, 2);
        };
    });
});