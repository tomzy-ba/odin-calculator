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
})

subtractButton.addEventListener("click", () => {
})

multiplyButton.addEventListener("click", () => {
})

divideButton.addEventListener("click", () => {
})


function calcOperate(inputOperator, calcvalue1, calcvalue2) {
    if(inputOperator === "add") {
        return (calcvalue1 + calcvalue2);
    }
    else if (inputOperator === "subtract") {
        return(calcvalue1 - calcvalue2);
    }
    else if (inputOperator === "multiply") {
        return(calcvalue1 * calcvalue2);
    }
    else if (inputOperator === "divide") {
        return(calcvalue1 / calcvalue2)
    }
}
console.log(calcOperate("add", 4, 6))