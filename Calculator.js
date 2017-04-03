var current_input = "0";
var memory = "0";
var operator = 0;

function setBinary() {

}

function setOctal() {

}

function setDecimal() {
    document.getElementById("hex").className = "disabledButton";
}

function setHex() {

}

function displayCurrentInput() {
    document.getElementById('screen').value = current_input;
}

function addDigit(dig) {
    if (current_input.length == 30) {
        current_input = current_input;
    } else if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    } else {
        current_input = current_input + dig;
    }
    displayCurrentInput();
}

function addDecimal() {
    if (current_input.length == 0) {
        //no leading ".", use "0."
        current_input = "0.";
    } else {
        // First make sure one doesn't exist
        if (current_input.indexOf(".") == -1) {
            current_input = current_input + ".";
        }
    }
    displayCurrentInput();
}

function allClear() {
    current_input = "0";
    operator = 0;                //clear operator
    memory = "0";                  //clear memory
    displayCurrentInput();
}

function storeOperator(op) {
    if (op.indexOf("*") > -1) { operator = 1; };       //codes for *
    if (op.indexOf("/") > -1) { operator = 2; };       // slash (divide)
    if (op.indexOf("+") > -1) { operator = 3; };       // sum
    if (op.indexOf("-") > -1) { operator = 4; };       // difference
    if (op.indexOf("^") > -1) { operator = 5; };       // exponent

    memory = current_input;                 //store value
    current_input = "0";
    displayCurrentInput();
}

function calculate() {
    if (operator == 1) { current_input = eval(memory) * eval(current_input); };
    if (operator == 2 && current_input == 0) { current_input = "ERROR: Divide by 0"; } else if (operator == 2) { current_input = eval(memory) / eval(current_input); };
    if (operator == 3) { current_input = eval(memory) + eval(current_input); };
    if (operator == 4) { current_input = eval(memory) - eval(current_input); };
    if (operator == 5) { current_input = Math.pow(memory, current_input); };

    operator = 0;                //clear operator
    memory    = "0";              //clear memory
    displayCurrentInput();
}

function changeSign() {
    current_input = current_input * -1;
    displayCurrentInput();
}

function clearCurrent() {
    current_input = "0";
    displayCurrentInput();
}

function percentage() {
    current_input = current_input / 100;
    displayCurrentInput();
}

function factorial() {
    if (current_input == 0) {
        current_input = 1;
    }
    if (current_input < 0) {
        current_input = "ERROR: Input must be >0";
    }
    for (var i = current_input; --i; ) {
        current_input = current_input * i;
    }
    displayCurrentInput();
}

function square() {
    current_input = current_input * current_input;
    displayCurrentInput();
}

function squareRoot() {
    current_input = Math.sqrt(current_input);
    displayCurrentInput();
}

function inverse() {
    current_input = 1 / current_input;
    displayCurrentInput();
}
