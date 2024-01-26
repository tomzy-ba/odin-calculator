const addButton = document.querySelector("#add_button");
const subtractButton = document.querySelector("#subtract_button");
const multiplyButton = document.querySelector("#multiply_button");
const divideButton = document.querySelector("#divide_button");
const equalsButton = document.querySelector("#equals_button");

const calcInput = document.querySelector("#calculator_input");
const calcClear = document.querySelector("#calculator_clear_button")

calcClear.addEventListener("click", () => {
    calcInput.value = null;
})

addButton.addEventListener("click", () => {
    currentValue = calcInput.value;
    calcInput.value = null;
    currentOperator = "add";
})

subtractButton.addEventListener("click", () => {
    currentValue = calcInput.value;
    calcInput.value = null;
    currentOperator = "subtract";
})

multiplyButton.addEventListener("click", () => {
    currentValue = calcInput.value;
    calcInput.value = null;
    currentOperator = "multiply";
})

divideButton.addEventListener("click", () => {
    currentValue = calcInput.value;
    calcInput.value = null;
    currentOperator = "divide";
})

equalsButton.addEventListener("click", () => {
    calcOperate(currentOperator, parseInt(currentValue), parseInt(calcInput.value))
})

function calcOperate(inputOperator, calcvalue1, calcvalue2) {
    if(inputOperator === "add") {
        calcInput.value = (calcvalue1 + calcvalue2);
    }
    else if (inputOperator === "subtract") {
        calcInput.value = (calcvalue1 - calcvalue2);
    }
    else if (inputOperator === "multiply") {
        calcInput.value = (calcvalue1 * calcvalue2)
    }
    else if (inputOperator === "divide") {
        calcInput.value = (calcvalue1 / calcvalue2)
    }
}