const addButton = document.querySelector("#add_button");
const subtractButton = document.querySelector("#subtract_button");
const multiplyButton = document.querySelector("#multiply_button");
const divideButton = document.querySelector("#divide_button");
const equalsButton = document.querySelector("#equals_button");

const calcInput = document.querySelector("#calculator_input");
const calcClear = document.querySelector("#calculator_clear_button")

document.querySelector("#one_button").addEventListener("click", numButtonClick)
document.querySelector("#two_button").addEventListener("click", numButtonClick)
document.querySelector("#three_button").addEventListener("click", numButtonClick)
document.querySelector("#four_button").addEventListener("click", numButtonClick)
document.querySelector("#five_button").addEventListener("click", numButtonClick)
document.querySelector("#six_button").addEventListener("click", numButtonClick)
document.querySelector("#seven_button").addEventListener("click", numButtonClick)
document.querySelector("#eight_button").addEventListener("click", numButtonClick)
document.querySelector("#nine_button").addEventListener("click", numButtonClick)
document.querySelector("#zero_button").addEventListener("click", numButtonClick)

function numButtonClick() {
    calcInput.value += this.innerHTML;
}


calcClear.addEventListener("click", () => {
    calcInput.value = null;
    currentValue = null;
    currentOperator = null;
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