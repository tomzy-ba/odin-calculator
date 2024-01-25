const addButton = document.querySelector("#add_button");
const subtractButton = document.querySelector("#subtract_button");
const multiplyButton = document.querySelector("#multiply_button");
const divideButton = document.querySelector("#divide_button");
const equalsButton = document.querySelector("#equals_button");

const calcInput = document.querySelector("#calculator_input");

function calcOperate() {

addButton.addEventListener("click", () => {
    let userAddValue = calcInput.value;
    calcInput.value = null;
})
subtractButton.addEventListener("click", () => {
    let userSubtracting = calcInput.value;
    calcInput.value = null;
})
multiplyButton.addEventListener("click", () => {
    let userMuliplying = calcInput.value;
    calcInput.value = null;
})
divideButton.addEventListener("click", () => {
    let userDividing = calcInput.value;
    calcInput.value = null;
})

equalsButton.addEventListener("click", () => {
    calcInput.value = userAddValue + calcInput.value;
})

}
calcOperate()