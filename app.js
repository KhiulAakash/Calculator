let buttons = document.querySelectorAll("button");
let display = document.querySelector("input");

let operators = ['+', '-', '*', '/'];

for (let button of buttons) {
    button.addEventListener("click", () => {
        if (display.value === "0" || display.value === "") {
            if (button.value === "+" || button.value === "*" || button.value === "/") {
                // Do not change the display value if the first button clicked is an operator
                return;
            }
            display.value = button.value;
        } else {
            // Check if the last character is an operator
            let lastChar = display.value.slice(-1);
            if (operators.includes(lastChar) && operators.includes(button.value)) {
                // Replace the last operator with the new one
                display.value = display.value.slice(0, -1) + button.value;
            } else {
                display.value += button.value;
            }
        }
        if (button.innerText === "=") {
            calculate();
        }
        if (button.innerText === "C") {
            clearDisplay();
        }
        if (button.innerText === "←") {
            removeLastElement();
        }
    });
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}

function removeLastElement() {
    display.value = display.value.slice(0, -1);
}
