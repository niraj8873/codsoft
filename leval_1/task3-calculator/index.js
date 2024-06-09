let equation = '';

function addToScreen(value) {
    equation += value;
    document.getElementById('display').value = equation;
}

function clearScreen() {
    equation = '';
    document.getElementById('display').value = equation;
}

function calculate() {
    try {
        const result = eval(equation);
        equation = result.toString();
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid equation');
        clearScreen();
    }
}
