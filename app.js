var display = document.getElementById("inputBox");
var string = "";

function handleClick(value) {
    if (value == "DEL") {
        string = string.slice(0, string.length - 1);
    } 
    else if (value == "AC") {
        string = "";
    } 
    else if (value == "=") {
        try {
            string = eval(string).toString();
        } catch (error) {
            string = "Error";
        }
    } 
    else if (!isNaN(value) || value === '.') {
        string += value;
    } 
    else if (isOperator(value)) {
        if (string === "" || isOperator(string.slice(-1))) {
            if (string.slice(-1) === '-' || string.slice(-1) === '+' || string.slice(-1) === '*' || string.slice(-1) === '/' || string.slice(-1) === '%') {
                string = string.slice(0, -1) + value;
            }
        } else {
            string += value;
        }
    }

    display.value = string;
}

function isOperator(value) {
    return ["+", "-", "*", "/", "%"].includes(value);
}
