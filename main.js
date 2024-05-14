
let display = document.getElementById("input");
let string = "";

function number(value) {
    string += value;
    display.value = string;
}


function add() {
    string += '+';
    display.value = string;
}

function subtract() {
    string += '-';
    display.value = string;
}

function multiply() {
    string += '*';
    display.value = string;
}

function divide() {
    string += '/';
    display.value = string;
}

function AC() {
    string = "";
    display.value = string;
}

function Del() {
    string = string.substring(0, string.length - 1);
    display.value = string;
}

function calculate() {

    let result = eval(string);
    display.value = result;

}