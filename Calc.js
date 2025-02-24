const display = document.getElementById("display");

 toDisplay = (input) => {
    display.value += input;
}

function calculate() {
    try {
    display.value = eval(display.value);
    }
    catch(error) {
         display.value = "Error!"
}
}
clearDisplay =  () => {

        display.value = "";
}
function toClear() {
    display.value = pop(display.value)
}